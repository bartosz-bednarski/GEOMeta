import { Outlet } from "react-router-dom";
import classes from "../styles/globals/layout.module.scss";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
const RootLayout = () => {
  return (
    <>
      {" "}
      <Navigation />
      <div className={classes["layout"]}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
