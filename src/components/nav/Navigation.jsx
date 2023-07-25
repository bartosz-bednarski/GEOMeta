import { Router, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import LogoSmall from "../../tools/LogoSmall";
const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["nav-container"]}>
      <LogoSmall />
      <nav className={classes["nav-container__navigation"]}>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/continents")}>Kontynenty</li>
          <li onClick={() => navigate("/islands")}>Wyspy</li>
          <li onClick={() => navigate("/trekkers")}>Trekkery</li>
          <li onClick={() => navigate("/others")}>Inne</li>
          <li onClick={() => navigate("/forum")}>Forum</li>
        </ul>
      </nav>
      <span />
    </div>
  );
};
export default HomeNav;
