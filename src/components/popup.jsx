import React from "react";
import '../style/modal.css'

function Modal({ error, setError, children }) {
    return (
        <div className='modal' onClick={() => setError(null)} >
            <div className="modal__content">
                {children}
            </div>
        </div>
    )
}

export default Modal