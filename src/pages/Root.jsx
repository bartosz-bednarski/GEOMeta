import { Outlet, useLocation } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
import Navigation from "../components/nav/Navigation.tsx";
import Footer from "../components/footer/Footer.tsx";
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
        location.pathname !== "/quiz/emblems" &&
        location.pathname !== "/quiz/plates" && <Footer />}
    </>
  );
};

export default RootLayout;
