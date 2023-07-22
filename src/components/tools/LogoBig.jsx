import classes from "./logo.module.scss";
import logo from "../../assets/images/home/logo/logo geometa.png";
const Logo = () => {
  return <img src={logo} className={classes["logo--big"]} />;
};
export default Logo;
