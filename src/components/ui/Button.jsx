import classes from "./button.module.scss";
const Button = (props) => {
  return (
    <button
      className={classes["button-global"]}
      style={props.style}
      onClick={props.onClick}
      type={props.type}
    >
      {props.content}
    </button>
  );
};

export default Button;
