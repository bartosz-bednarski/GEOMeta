import classes from "./button.module.scss";
const Button = (props) => {
  return (
    <button className={classes["button-global"]} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
