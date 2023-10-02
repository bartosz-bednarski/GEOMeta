import { Router, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import LogoSmall from "../tools/LogoSmall";
import Button from "../globals/Button";
const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["nav-container"]}>
      <LogoSmall />
      <nav className={classes["nav-container__navigation"]}>
        <ul className={classes["nav-container__navigation__pages"]}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/continents")}>Kontynenty</li>
          <li onClick={() => navigate("/islands")}>Wyspy</li>
          <li onClick={() => navigate("/trekkers")}>Trekkery</li>
          <li onClick={() => navigate("/others")}>Inne</li>
          <li onClick={() => navigate("/forum")}>Forum</li>
        </ul>
      </nav>
      <span
        className={
          classes["nav-container__navigation__login-register-container"]
        }
      >
        <Button content="Login" />
        <Button content="Register" />
      </span>
    </div>
  );
};
export default HomeNav;
