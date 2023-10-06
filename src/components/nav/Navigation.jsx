import { Router, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import LogoSmall from "../tools/LogoSmall";
import Button from "../globals/Button";
import { useState } from "react";
const Navigation = () => {
  const navigate = useNavigate();
  const [dropdownShown, setDropdownShown] = useState(false);

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
      {dropdownShown && (
        <nav className={classes["nav-container__dropdown-menu--shown"]}>
          <ul className={classes["nav-container__dropdown-menu--shown__pages"]}>
            <li
              style={{ "padding-top": "1rem" }}
              onClick={() => {
                setDropdownShown(false);
              }}
            >
              <svg
                style={{ fill: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </li>
            <li
              onClick={() => {
                navigate("/");
                setDropdownShown(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/continents");
                setDropdownShown(false);
              }}
            >
              Kontynenty
            </li>
            <li
              onClick={() => {
                navigate("/islands");
                setDropdownShown(false);
              }}
            >
              Wyspy
            </li>
            <li
              onClick={() => {
                navigate("/trekkers");
                setDropdownShown(false);
              }}
            >
              Trekkery
            </li>
            <li
              onClick={() => {
                navigate("/others");
                setDropdownShown(false);
              }}
            >
              Inne
            </li>
            <li
              onClick={() => {
                navigate("/forum");
                setDropdownShown(false);
              }}
            >
              Forum
            </li>
            <li
              onClick={() => {
                navigate("/forum");
                setDropdownShown(false);
              }}
            >
              Login
            </li>
            <li
              style={{ "padding-bottom": "1rem" }}
              onClick={() => navigate("/forum")}
            >
              Register
            </li>
          </ul>
        </nav>
      )}

      <button
        className={classes["nav-container__navigation__button"]}
        onClick={() => {
          setDropdownShown(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className={
            classes["nav-container__navigation__button-hamburger-icon"]
          }
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </div>
  );
};
export default Navigation;
