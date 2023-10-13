import classes from "../authentication.module.scss";
import Logo from "../../../assets/images/logo/logogeometa.png";
import World from "../../../assets/images/home/world.png";
import Button from "../../globals/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
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
        <form className={classes["authentication-container__right-box__form"]}>
          <label htmlFor="#username">Użytkownik</label>
          <input id="username" />

          <label htmlFor="#password">Hasło</label>
          <input id="password" type="password" />
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
