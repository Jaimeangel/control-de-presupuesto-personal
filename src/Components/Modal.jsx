import cerrarModal from '../img/cerrar.svg'

function Modal({setModal,animarModal,setAnimarModal}) {

    const closeModal=()=>{
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={cerrarModal}
                    alt='cerrar modal'
                    onClick={closeModal}
                />
            </div>
            <form className={`formulario ${animarModal &&'animar'}`}>
                <legend>Ingresa un nuevo gasto</legend>
            </form>
        </div>
    )
}

export default Modal;
