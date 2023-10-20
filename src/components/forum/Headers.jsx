import classes from "./headers.module.scss";
const Headers = () => {
  return (
    <div className={classes["headers-container"]}>
      <span className={classes["headers-container__header"]}>Autor</span>
      <span className={classes["headers-container__header"]}>Temat</span>
      <span className={classes["headers-container__header"]}>
        Odpowiedzi/ostatni post
      </span>
    </div>
  );
};
export default Headers;
