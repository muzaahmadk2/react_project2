import { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};
const ModalOverlay = props =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
const PortalElements = document.getElementById('overlays');

const Modal = props =>{
    return <Fragment>
        {ReactDom.createPortal(<BackDrop onClose={props.onClose}/>, PortalElements)};
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElements)};
    </Fragment>
};

export default Modal;