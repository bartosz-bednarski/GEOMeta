import { Outlet, useLocation } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      {" "}
      {location.pathname !== "/register" && location.pathname !== "/login" && (
        <Navigation />
      )}
      <div className={classes["layout"]}>
        <Outlet />
      </div>
      {location.pathname !== "/register" &&
        location.pathname !== "/login" &&
        location.pathname !== "/quiz/flags" &&
        location.pathname !== "/quiz/emblems" && <Footer />}
    </>
  );
};

export default RootLayout;
