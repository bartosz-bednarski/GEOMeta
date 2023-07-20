import classes from "./HomeNav.module.scss";
const HomeNav = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>Home</li>
        <li>Kontynenty</li>
        <li>Wyspy</li>
        <li>Trekkery</li>
        <li>Inne</li>
        <li>Forum</li>
      </ul>
    </nav>
  );
};
export default HomeNav;
