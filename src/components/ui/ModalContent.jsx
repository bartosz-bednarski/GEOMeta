import classes from "./modal.module.scss";
const ModalContent = (props) => {
  return (
    <div className={classes["modal-layout__content-container"]}>
      <span
        className={classes["modal-layout__content-container__close-tag"]}
        onClick={() => props.onModalHide(true)}
      >
        X
      </span>
      {props.children}
    </div>
  );
};
export default ModalContent;
