import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    const el = document.createElement('div');
    const modalRoot = document.getElementById('root-modal');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        modalRoot.appendChild(el);

        // Specify how to clean up after this effect:
        return () => modalRoot.removeChild(el);
    });

    return ReactDOM.createPortal(<>{props.children}</>, el);
};

export default Modal;
