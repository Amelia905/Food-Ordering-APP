import { Fragment } from "react";
// import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onCloseCart={props.onCloseCart} />
      <ModalOverlay>{props.children}</ModalOverlay>
      {/* {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )} */}
    </Fragment>
  );
};

export default Modal;
