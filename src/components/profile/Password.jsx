import classes from "./password.module.scss";
import lockImg from "../../assets/images/ui/lock.svg";
import Button from "../ui/Button";
import check from "../../assets/images/ui/checkmark-outline.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Password = (props) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [oldPasswordWarning, setOldPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [newPasswordWarning, setNewPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [newPasswordConfirmWarning, setNewPasswordConfirmWarning] = useState({
    status: false,
    message: "",
  });
  const [responseWarning, setResponseWarning] = useState({
    status: false,
    message: "",
  });
  const [loader, setLoader] = useState({
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
  const submitHandler = async (event) => {
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
      const url =
        "https://geo-meta-rest-api.vercel.app/api/profile/changePassword";
      // const url = "http://localhost:9001/api/profile/changePassword";
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword,
          newPasswordConfirm: newPasswordConfirm,
        }),
      });
      const data = await response.json();
      if (data.message === "Password changed") {
        setLoader({ status: true, type: "passwordChanged" });
        // setResponseMessage({ status: true, message: "Password changed" });
        localStorage.removeItem("accessToken");
        localStorage.setItem("accessToken", data.body.accessToken);
        setOldPassword("");
        setNewPassword("");
        setNewPasswordConfirm("");
        setTimeout(() => {
          setLoader({ status: false, type: "" });
          navigate(0);
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
