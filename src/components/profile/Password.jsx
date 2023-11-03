import classes from "./password.module.scss";
import lockImg from "../../assets/images/ui/lock.svg";
import Button from "../ui/Button";
const Password = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes["password-container"]}>
      <div className={classes["password-container__header-box"]}>
        <div className={classes["password-container__header-box__logo-box"]}>
          <img src={lockImg} alt="user" />
        </div>
        <span>Hasło</span>
      </div>
      <div className={classes["password-container__personal-box"]}>
        <form
          className={classes["password-container__personal-box__form-box"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="oldPassword">Wprowadź stare hasło:</label>
          <input id="oldPassword" />
          <label htmlFor="newPassword">Wprowadź nowe hasło:</label>
          <input id="newPassword" />
          <label htmlFor="newPasswordConfirm">Potwierdź nowe hasło:</label>
          <input id="newPasswordConfirm" />
          <Button type="submit" content="Zatwierdź" />
        </form>
      </div>
    </div>
  );
};

export default Password;
