import { Outlet } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
const RootLayout = () => {
  return (
    <div className={classes["layout"]}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
