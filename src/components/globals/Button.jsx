import classes from "./button.module.scss";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.content}
    </button>
  );
};

export default Button;
