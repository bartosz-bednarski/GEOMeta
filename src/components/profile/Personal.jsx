import classes from "./personal.module.scss";
import Button from "../ui/Button";
import userImg from "../../assets/images/ui/user.svg";

const Personal = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes["personal-container"]}>
      <div className={classes["personal-container__header-box"]}>
        <div className={classes["personal-container__header-box__logo-box"]}>
          <img src={userImg} alt="user" />
        </div>
        <span>Dane użytkownika</span>
      </div>
      <div className={classes["personal-container__personal-box"]}>
        <h2>Demo</h2>
        <span
          className={classes["personal-container__personal-box__user-icon"]}
        >
          DD
        </span>
        <span
          className={classes["personal-container__personal-box__user-email"]}
        >
          demo123@gmail.com
        </span>
        <form
          className={classes["personal-container__personal-box__form-box"]}
          onSubmit={submitHandler}
        >
          <label>Zmień krótką nazwę:</label>
          <input />
          <Button type="submit" content="Zatwierdź" />
        </form>
      </div>
    </div>
  );
};

export default Personal;
