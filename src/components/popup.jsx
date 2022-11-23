import React from "react";
import '../style/modal.css'

function Modal({ error, setError, children }) {
    return (
        <div onClick={() => setError(false)} className="modal">
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

export default Modal