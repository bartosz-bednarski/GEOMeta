import { useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import LogoSmall from "../ui/LogoSmall";
import Button from "../ui/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth-reducer";
const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownShown, setDropdownShown] = useState(false);
  const username = useSelector((state) => state.auth.userName);
  const iconBackgroundColor = useSelector(
    (state) => state.auth.iconBackgroundColor
  );
  const email = useSelector((state) => state.auth.email);
  const usernameShort = useSelector((state) => state.auth.usernameShort);
  const [userListShown, setUserListShown] = useState(false);
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("username");
    localStorage.removeItem("iconBackgroundColor");
    localStorage.removeItem("email");
    localStorage.removeItem("iconmodaldisplay");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("usernameShort");
    localStorage.removeItem("userId");
    setUserListShown(false);
    navigate(0);
  };
  const userIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path
        style={{ fill: "white" }}
        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
      />
    </svg>
  );
  return (
    <div className={classes["nav-container"]}>
      <div className={classes["nav-container__logo-box"]}>
        <button
          className={classes["nav-container__logo-box__button"]}
          onClick={() => {
            setUserListShown(false);
            setDropdownShown(!dropdownShown);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className={
              classes["nav-container__logo-box__button-hamburger-icon"]
            }
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <LogoSmall />
      </div>
      {dropdownShown && (
        <nav className={classes["nav-container__dropdown-menu--shown"]}>
          <ul className={classes["nav-container__dropdown-menu--shown__pages"]}>
            <li
              onClick={() => {
                navigate("/");
                setUserListShown(false);
                setDropdownShown(false);
              }}
            >
              Strona Główna
            </li>
            <li
              onClick={() => {
                navigate("/continents");
                setUserListShown(false);
                setDropdownShown(false);
              }}
            >
              Kontynenty
            </li>
            {/* <li
              onClick={() => {
                navigate("/islands");
                setUserListShown(false);setDropdownShown(false);
              }}
            >
              Wyspy
            </li>
            <li
              onClick={() => {
                navigate("/trekkers");
                setUserListShown(false);setDropdownShown(false);
              }}
            >
              Trekkery
            </li> */}
            <li
              onClick={() => {
                navigate("/quiz");
                setUserListShown(false);
                setDropdownShown(false);
              }}
            >
              Quiz
            </li>
            <li
              onClick={() => {
                navigate("/forum");
                setUserListShown(false);
                setDropdownShown(false);
              }}
            >
              Forum
            </li>
          </ul>
        </nav>
      )}
      <nav className={classes["nav-container__navigation"]}>
        <ul className={classes["nav-container__navigation__pages"]}>
          <li
            onClick={() => {
              setUserListShown(false);
              navigate("/");
            }}
          >
            Strona Główna
          </li>
          <li
            onClick={() => {
              setUserListShown(false);
              navigate("/continents");
            }}
          >
            Kontynenty
          </li>
          {/* <li onClick={() => navigate("/islands")}>Wyspy</li>
          <li onClick={() => navigate("/trekkers")}>Trekkery</li> */}
          <li
            onClick={() => {
              setUserListShown(false);
              navigate("/quiz");
            }}
          >
            Quiz
          </li>
          <li
            onClick={() => {
              setUserListShown(false);
              navigate("/forum");
            }}
          >
            Forum
          </li>
        </ul>
      </nav>

      <span
        className={
          classes["nav-container__navigation__login-register-container"]
        }
      >
        <Button
          content={usernameShort ? usernameShort : userIcon}
          style={{
            padding: 0,
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            backgroundColor: iconBackgroundColor
              ? iconBackgroundColor
              : "#09c8e2b3",
          }}
          onClick={() => {
            setDropdownShown(false);
            setUserListShown(!userListShown);
          }}
        />
        {userListShown && (
          <div
            className={
              classes[
                "nav-container__navigation__login-register-container__user-container"
              ]
            }
          >
            {username && (
              <div
                className={
                  classes[
                    "nav-container__navigation__login-register-container__user-container__header-container"
                  ]
                }
              >
                <Button
                  content={usernameShort}
                  style={{
                    padding: 0,
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    backgroundColor: iconBackgroundColor
                      ? iconBackgroundColor
                      : "#09c8e2b3",
                  }}
                />

                <div
                  className={
                    classes[
                      "nav-container__navigation__login-register-container__user-container__header-container__right"
                    ]
                  }
                >
                  <span>{username}</span>
                  <span>{email}</span>
                </div>
              </div>
            )}

            <ul>
              {!username && (
                <>
                  <li
                    onClick={() => {
                      setUserListShown(false);
                      navigate("/login");
                    }}
                  >
                    Zaloguj się
                  </li>
                  <li
                    onClick={() => {
                      setUserListShown(false);
                      navigate("/register");
                    }}
                  >
                    Zarejestruj się
                  </li>
                </>
              )}
              {username && (
                <>
                  <li
                    onClick={() => {
                      setUserListShown(false);
                      navigate("/profile");
                    }}
                  >
                    Profil
                  </li>
                  <li onClick={logoutHandler}>Wyloguj się</li>
                </>
              )}
            </ul>
          </div>
        )}
      </span>
    </div>
  );
};
export default Navigation;
