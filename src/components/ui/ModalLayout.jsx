import ModalContent from "./ModalContent";
import classes from "./modal.module.scss";
import { useState } from "react";
const ModalLayout = (props) => {
  const [modalHidden, setModalHidden] = useState();
  return (
    <div
      className={`${classes["modal-layout"]} ${
        modalHidden && classes["modal-hidden"]
      }`}
    >
      <ModalContent onModalHide={setModalHidden}>{props.children}</ModalContent>
    </div>
  );
};
export default ModalLayout;
