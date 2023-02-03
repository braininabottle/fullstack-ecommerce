import './Modal.styles.css';


const Modal = ({ setShowModal }) => {

    return (
        <div className='modal-container'>
            <h1 className='modal-title'>¿Eres mayor de 18 años?</h1>
            <div>
                <div className='fs-5 btn btn-dark text-white m-5'>
                    <button onClick={() => setShowModal(false)}>Si</button>
                </div>
                <div className='fs-5 btn btn-dark text-white m-5'>
                    <button onClick={() => setShowModal(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;