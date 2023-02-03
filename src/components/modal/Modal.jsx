import './Modal.styles.css';


const Modal = ({ setShowModal }) => {

    return (
        <div className='modal-container'>
            <h1 className='modal-title col-xl-12 col-lg-12 col-md-12 col-sm-12'>¿Eres mayor de 18 años?</h1>
            <div className='buttons'>
                <div className='custom-modal-button text-white m-1'>
                    <button classname="modalButtons" onClick={() => setShowModal(false)}>Si</button>
                </div>
                <div className='custom-modal-button text-white m-1'>
                    <button classname="modalButtons" onClick={() => setShowModal(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;