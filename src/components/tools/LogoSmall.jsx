import classes from "./logo.module.scss";
import logo from "../../assets/images/home/logo/geometav3.png";
const Logo = () => {
  return <img src={logo} className={classes["logo--small"]} />;
};
export default Logo;
