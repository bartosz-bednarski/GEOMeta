import { Outlet } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
import HomeNav from "../components/home/nav/Navigation";
const RootLayout = () => {
  return (
    <div className={classes["layout"]}>
      <HomeNav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
