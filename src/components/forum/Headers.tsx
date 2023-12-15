import React from "react";
import classes from "./headers.module.scss";
const Headers: React.FC = () => {
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
