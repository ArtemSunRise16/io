import React from "react";
import '../style/modal.css'

function Modal({ error, setError}) {
    console.log(error);
    return (
        <div className='modal' onClick={() => setError(null)} >
            <div className="modal__content">
            {error}
            </div>
        </div>
    )
}

export default Modal