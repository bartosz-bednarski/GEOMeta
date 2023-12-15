import React from "react";
import classes from "../authentication.module.scss";
import Logo from "../../../assets/images/logo/logogeometa.png";
import World from "../../../assets/images/home/world.png";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAuth } from "../../../api/authentication";
const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginWarning, setLoginWarning] = useState<{
    status: boolean;
    message: string;
  }>({
    status: false,
    message: "",
  });
  const [passwordWarning, setPasswordWarning] = useState<{
    status: boolean;
    message: string;
  }>({
    status: false,
    message: "",
  });
  const [emailWarning, setEmailWarning] = useState<{
    status: boolean;
    message: string;
  }>({
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
  const submitHandler = async (event: React.FormEvent) => {
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
      const data = await registerAuth(login, email, password);
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
          <label htmlFor="#email">E-mail</label>
          <input
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
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
          <div
            className={
              classes["authentication-container__right-box__form__input-box"]
            }
          >
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
                onClick={() => setShowPassword(false)}
              >
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                onClick={() => setShowPassword(true)}
              >
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
            )}
          </div>

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
