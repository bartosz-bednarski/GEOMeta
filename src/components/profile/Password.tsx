import React from "react";
import classes from "./password.module.scss";
import lockImg from "../../assets/images/ui/lock.svg";
import Button from "../ui/Button";
import check from "../../assets/images/ui/checkmark-outline.svg";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateAccessToken } from "../../redux/auth-reducer";
import { setNewUserPassword } from "../../api/profile";
import { loaderState, warningState } from "profile";

const Password: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  const [oldPasswordWarning, setOldPasswordWarning] = useState<warningState>({
    status: false,
    message: "",
  });
  const [newPasswordWarning, setNewPasswordWarning] = useState<warningState>({
    status: false,
    message: "",
  });
  const [newPasswordConfirmWarning, setNewPasswordConfirmWarning] =
    useState<warningState>({
      status: false,
      message: "",
    });
  const [responseWarning, setResponseWarning] = useState<warningState>({
    status: false,
    message: "",
  });
  const [loader, setLoader] = useState<loaderState>({
    type: "",
    status: false,
  });

  useEffect(() => {
    setResponseWarning({ status: false, message: "" });
    if (oldPassword.length >= 6) {
      setOldPasswordWarning({ status: false, message: "" });
    }
    if (newPassword.length >= 6) {
      setNewPasswordWarning({ status: false, message: "" });
    }
    if (newPasswordConfirm.length >= 6) {
      setNewPasswordConfirmWarning({ status: false, message: "" });
    }
  }, [oldPassword, newPassword, newPasswordConfirm]);
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (oldPassword.length < 6) {
      setOldPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (newPassword.length < 6) {
      setNewPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (newPasswordConfirm.length < 6) {
      setNewPasswordConfirmWarning({
        status: true,
        message: "Hasło jest za krótkie",
      });
    }
    if (newPassword !== newPasswordConfirm) {
      setNewPasswordWarning({ status: true, message: "Hasła różnią się" });
      setNewPasswordConfirmWarning({
        status: true,
        message: "Hasła różnią się",
      });
    }
    if (
      newPassword === newPasswordConfirm &&
      oldPassword.length >= 6 &&
      newPassword.length >= 6 &&
      newPasswordConfirm.length >= 6
    ) {
      setLoader({ status: true, type: "loading" });

      const data = await setNewUserPassword(
        accessToken,
        oldPassword,
        newPassword,
        newPasswordConfirm
      );
      if (data.message === "Password changed") {
        setLoader({ status: true, type: "passwordChanged" });
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", data.body.accessToken);
        dispatch(updateAccessToken(data.body.accessToken));
        setOldPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
        setTimeout(() => {
          setLoader({ status: false, type: "" });
        }, 2000);
      }
      if (data.message === "One or more passwords are too short") {
        setLoader({ status: false, type: "" });
        setResponseWarning({
          status: true,
          message: "Jedno z haseł jest za krótkie",
        });
      }
      if (data.message === "New passwords are different") {
        setLoader({ status: false, type: "" });
        setResponseWarning({ status: true, message: "Nowe hasła różnią się" });
      }
      if (data.message === "Failed to connect with db") {
        setLoader({ status: false, type: "" });
        setResponseWarning({
          status: true,
          message: "Problem z połączeniem się z bazą danych",
        });
      }
      if (data.message === "Old password is wrong") {
        setLoader({ status: false, type: "" });
        setResponseWarning({ status: true, message: "Stare hasło jest złe" });
      }
    }
  };
  return (
    <div className={classes["password-container"]}>
      <div className={classes["password-container__header-box"]}>
        <div className={classes["password-container__header-box__logo-box"]}>
          <img src={lockImg} alt="user" />
        </div>
        <span>Hasło</span>
      </div>
      <div className={classes["password-container__personal-box"]}>
        {loader.type === "loading" && loader.status === true && (
          <span
            className={classes["password-container__personal-box__loader"]}
          ></span>
        )}
        {loader.type === "passwordChanged" && loader.status === true && (
          <span className={classes["password-container__personal-box__check"]}>
            <img src={check} alt="check" />
          </span>
        )}
        {!loader.status && (
          <form
            className={classes["password-container__personal-box__form-box"]}
            onSubmit={submitHandler}
          >
            <label htmlFor="oldPassword">Wprowadź stare hasło:</label>
            {oldPasswordWarning.status === true && (
              <span
                className={
                  classes["password-container__personal-box__form-box__warning"]
                }
              >
                {oldPasswordWarning.message}
              </span>
            )}
            <input
              id="oldPassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label htmlFor="newPassword">Wprowadź nowe hasło:</label>
            {newPasswordWarning.status === true && (
              <span
                className={
                  classes["password-container__personal-box__form-box__warning"]
                }
              >
                {newPasswordWarning.message}
              </span>
            )}
            <input
              id="newPassword"
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label htmlFor="newPasswordConfirm">Potwierdź nowe hasło:</label>
            {newPasswordConfirmWarning.status === true && (
              <span
                className={
                  classes["password-container__personal-box__form-box__warning"]
                }
              >
                {newPasswordConfirmWarning.message}
              </span>
            )}
            <input
              id="newPasswordConfirm"
              type="text"
              value={newPasswordConfirm}
              onChange={(e) => setNewPasswordConfirm(e.target.value)}
            />
            {responseWarning.status === true && (
              <span
                className={
                  classes["password-container__personal-box__form-box__warning"]
                }
              >
                {responseWarning.message}
              </span>
            )}

            <Button type="submit" content="Zatwierdź" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Password;
