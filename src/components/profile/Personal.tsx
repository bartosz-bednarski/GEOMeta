import React from "react";
import classes from "./personal.module.scss";
import Button from "../ui/Button";
import userImg from "../../assets/images/ui/user.svg";
import check from "../../assets/images/ui/checkmark-outline.svg";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { changeShortname } from "../../redux/auth-reducer";
import { setNewUserShortname } from "../../api/profile";
import { loaderState, warningState } from "profile";
const Personal: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const username = useAppSelector((state) => state.auth.userName);
  const iconBackgroundColor = useAppSelector(
    (state) => state.auth.iconBackgroundColor
  );
  const email = useAppSelector((state) => state.auth.email);
  const usernameShort = useAppSelector((state) => state.auth.usernameShort);
  const [shortName, setShortName] = useState<string>("");
  const [shortNameWarning, setShortNameWarning] = useState<warningState>({
    status: false,
    message: "",
  });
  const [loader, setLoader] = useState<loaderState>({
    type: "",
    status: false,
  });

  useEffect(() => {
    if (shortName.length < 3) {
      setShortNameWarning({ status: false, message: "" });
    }
  }, [shortName]);
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (shortName.length > 2) {
      setShortNameWarning({ status: true, message: "Nazwa jest za długa" });
    }
    if (shortName.length < 2) {
      setShortNameWarning({ status: true, message: "Nazwa jest za krótka" });
    }
    if (shortName.length === 0) {
      setShortNameWarning({ status: true, message: "Nazwa jest pusta" });
    }
    if (shortName.length === 2) {
      setLoader({ status: true, type: "loading" });

      const data = await setNewUserShortname(accessToken, shortName);
      if (data.message === "ok") {
        dispatch(changeShortname(shortName));
        setLoader({ status: true, type: "shortNameChanged" });
        localStorage.removeItem("usernameShort");
        localStorage.setItem("usernameShort", data.body.usernameShort);
        setShortName("");
        setTimeout(() => {
          setLoader({ status: false, type: "" });
        }, 2000);
      }
      if (data.message === "Shortname too long") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest za długa" });
      }
      if (data.message === "Shortname too short") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest za krótka" });
      }
      if (data.message === "Shortname empty") {
        setLoader({ status: false, type: "" });
        setShortNameWarning({ status: true, message: "Nazwa jest pusta" });
      }
    }
  };
  return (
    <div className={classes["personal-container"]}>
      <div className={classes["personal-container__header-box"]}>
        <div className={classes["personal-container__header-box__logo-box"]}>
          <img src={userImg} alt="user" />
        </div>
        <span>Dane użytkownika</span>
      </div>

      <div className={classes["personal-container__personal-box"]}>
        {loader.type === "loading" && loader.status === true && (
          <span
            className={classes["personal-container__personal-box__loader"]}
          ></span>
        )}
        {loader.type === "shortNameChanged" && loader.status === true && (
          <span className={classes["personal-container__personal-box__check"]}>
            <img src={check} alt="check" />
          </span>
        )}
        {!loader.status && (
          <>
            <h2>{username}</h2>
            <span
              className={classes["personal-container__personal-box__user-icon"]}
              style={{ backgroundColor: iconBackgroundColor }}
            >
              {usernameShort}
            </span>
            <span
              className={
                classes["personal-container__personal-box__user-email"]
              }
            >
              {email}
            </span>
            <form
              className={classes["personal-container__personal-box__form-box"]}
              onSubmit={submitHandler}
            >
              <label htmlFor="shortName">Zmień krótką nazwę:</label>
              {shortNameWarning.status === true && (
                <span
                  className={
                    classes[
                      "personal-container__personal-box__form-box__warning"
                    ]
                  }
                >
                  {shortNameWarning.message}
                </span>
              )}
              <input
                id="shortName"
                type="text"
                maxLength={2}
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
              />
              <Button type="submit" content="Zatwierdź" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Personal;
