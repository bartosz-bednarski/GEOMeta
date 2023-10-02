import { Outlet } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
const RootLayout = () => {
  return (
    <>
      {" "}
      <div className={classes["layout"]}>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
