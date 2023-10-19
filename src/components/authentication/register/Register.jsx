import classes from "../authentication.module.scss";
import Logo from "../../../assets/images/logo/logogeometa.png";
import World from "../../../assets/images/home/world.png";
import Button from "../../globals/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginWarning, setLoginWarning] = useState({
    status: false,
    message: "",
  });
  const [passwordWarning, setPasswordWarning] = useState({
    status: false,
    message: "",
  });
  const [emailWarning, setEmailWarning] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    if (login.length > 0) {
      setLoginWarning({ status: false, message: "" });
    }
    if (password.length >= 6) {
      setPasswordWarning({ status: false, message: "" });
    }
    if (email.length > 0) {
      setPasswordWarning({ status: false, message: "" });
    }
  }, [login, password, email]);
  const submitHandler = async (event) => {
    event.preventDefault();
    if (login.length === 0) {
      setLoginWarning({ status: true, message: "Uzupełnij nazwę użytkownika" });
    }
    if (email.length === 0) {
      setEmailWarning({ status: true, message: "Uzupełnij email" });
    }
    if (password.length < 6) {
      setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
    }
    if (login.length > 0 && password.length >= 6 && email.length > 0) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      const response = await fetch(
        "https://geo-meta-rest-api.vercel.app/api/users/register",
        {
          method: "POST",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: login,
            email: email,
            password: password,
            iconBackgroundColor: randomColor,
          }),
        }
      );
      const data = await response.json();
      if (data.message === "Login,password or email too short") {
        setLoginWarning({
          status: true,
          message: "Uzupełnij nazwę użytkownika",
        });
        setEmailWarning({ status: true, message: "Uzupełnij email" });
        setPasswordWarning({ status: true, message: "Hasło jest za krótkie" });
      }
      if (data.message === "Username already exists!") {
        setLoginWarning({
          status: true,
          message: "Podana nazwa użytkownika jest zajęta",
        });
        setLogin("");
      }
      if (data.message === "Email already exists!") {
        setEmailWarning({
          status: true,
          message: "Istnieje już konto na podany adres e-mail",
        });
        setEmail("");
      }
      if (data.message === "registered") {
        navigate("/login");
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
          <label htmlFor="#email" type="email">
            E-mail
          </label>
          <input
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          {emailWarning.status === true && (
            <span
              className={
                classes["authentication-container__right-box__form__warning"]
              }
            >
              {emailWarning.message}
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
            content="Utwórz nowe konto"
            type="submit"
            style={{
              margin: "1rem 0",
              fontSize: "1.5rem",
              padding: "0.6rem 3rem",
            }}
          />
        </form>
        <Button
          content="Zaloguj się"
          style={{
            margin: "1rem 0",
            fontSize: "1.5rem",
            padding: "0.6rem 3rem",
          }}
          onClick={() => navigate("/login")}
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
export default Register;
