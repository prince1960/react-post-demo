
import classes from "./Modal.module.css";

function Modal({children, modalOpenHandler}) {
    return (
        <>
            <div className={classes.backdrop} onClick={() => modalOpenHandler(false)}></div>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;