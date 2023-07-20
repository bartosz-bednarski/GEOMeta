import { Router, useNavigate } from "react-router-dom";
import classes from "./HomeNav.module.scss";
const HomeNav = () => {
  const navigate = useNavigate();
  return (
    <nav className={classes.navigation}>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/continents")}>Kontynenty</li>
        <li onClick={() => navigate("/islands")}>Wyspy</li>
        <li onClick={() => navigate("/trekkers")}>Trekkery</li>
        <li onClick={() => navigate("/others")}>Inne</li>
        <li onClick={() => navigate("/forum")}>Forum</li>
      </ul>
    </nav>
  );
};
export default HomeNav;
