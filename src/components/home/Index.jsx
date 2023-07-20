import HomeNav from "./nav/HomeNav";
import classes from "./home.module.scss";
import Logo from "../tools/Logo";
const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["nav-container"]}>
        <Logo />
        <HomeNav />
      </div>
    </div>
  );
};
export default Home;
