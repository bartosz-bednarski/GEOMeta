import classes from "../authentication.module.scss";
import Logo from "../../../assets/images/logo/logogeometa.png";
import World from "../../../assets/images/home/world.png";
import Button from "../../globals/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authenticationActions } from "../../../redux/authentication-slice";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginWarning, setLoginWarning] = useState({
    status: false,
    message: "",
  });
  const [passwordWarning, setPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (login.length > 0) {
      setLoginWarning({ status: false, message: "" });
    }
    if (password.length >= 6) {
      setPasswordWarning({ status: false, message: "" });
    }
  }, [login, password]);
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(login.length === 0);
    if (login.length === 0) {
      setLoginWarning({ status: true, message: "Uzupełnij nazwę użytkownika" });
    }
    if (password.length < 6) {
      setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (login.length > 0 && password.length >= 6) {
      const response = await fetch(
        "https://geo-meta-rest-api.vercel.app/api/users/login",
        // "http://localhost:9001/api/users/login",
        {
          method: "POST",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: login, password: password }),
        }
      );
      const data = await response.json();
      if (data.message === "Login or password too short") {
        setLoginWarning({
          status: true,
          message: "Uzupełnij nazwę użytkownika",
        });
        setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
      }
      if (data.message === "Wrong username") {
        setLoginWarning({ status: true, message: "Zła nazwa użytkownika" });
      }
      if (data.message === "Wrong password") {
        setPasswordWarning({ status: true, message: "Złe hasło" });
        setPassword("");
      }
      if (data.message === "loggedIn") {
        localStorage.setItem("username", data.body.username);
        localStorage.setItem(
          "iconBackgroundColor",
          data.body.iconBackgroundColor
        );
        localStorage.setItem("email", data.body.email);
        localStorage.setItem("accessToken", data.body.accessToken);
        localStorage.setItem("usernameShort", data.body.usernameShort);
        dispatch(
          authenticationActions.setLoggedIn({
            userName: data.body.username,
            iconBackgroundColor: data.body.iconBackgroundColor,
          })
        );
        navigate("/");
      }
    }
  };
  return (
    <div className={classes["authentication-container"]}>
      <div className={classes["authentication-container__left-box"]}>
        <img
          src={Logo}
          alt="logo"
          className={classes["authentication-container__left-box__logo"]}
        />
        <img
          src={World}
          alt="world"
          className={classes["authentication-container__left-box__world"]}
        />
        <Button
          content="Strona główna"
          style={{ fontSize: "1.7rem", padding: "0.6rem 3rem" }}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={classes["authentication-container__right-box"]}>
        <form
          className={classes["authentication-container__right-box__form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="#username">Użytkownik</label>
          <input
            id="username"
            onChange={(event) => setLogin(event.target.value)}
            value={login}
          />
          {loginWarning.status === true && (
            <span
              className={
                classes["authentication-container__right-box__form__warning"]
              }
            >
              {loginWarning.message}
            </span>
          )}
          <label htmlFor="#password">Hasło</label>
          <input
            id="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          {passwordWarning.status === true && (
            <span
              className={
                classes["authentication-container__right-box__form__warning"]
              }
            >
              {passwordWarning.message}
            </span>
          )}
          <Button
            content="Zaloguj się"
            type="submit"
            style={{
              margin: "1rem 0",
              fontSize: "1.5rem",
              padding: "0.6rem 3rem",
            }}
          />
        </form>
        <Button
          content="Utwórz nowe konto"
          style={{
            margin: "1rem 0",
            fontSize: "1.5rem",
            padding: "0.6rem 3rem",
          }}
          onClick={() => navigate("/register")}
        />
        <Button
          content="Strona główna"
          style={{ fontSize: "1.7rem", padding: "0.6rem 3rem" }}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};
export default Login;
