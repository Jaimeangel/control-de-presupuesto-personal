import cerrarModal from '../img/cerrar.svg'
import { useState } from 'react';

function Modal({setModal,animarModal,setAnimarModal}) {

    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState(0)
    const [categoria,setCategoria]=useState('')

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

                <div className='campo'>
                    <label htmlFor="nombre">Nombre del gasto</label>
                    <input 
                        id='nombre'
                        type="text"
                        placeholder='Nombre del gasto' 
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto ejm. 300' 
                        value={cantidad}
                        onChange={(e)=>setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={(e)=>setCategoria(e.target.value)}
                    >
                        <option value="">---Seleccione---</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Gastos varios">Gastos varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                    </select>

                    <input
                        value="Añadir gasto" 
                        type="submit" 
                    />
                </div>
            </form>
        </div>
    )
}

export default Modal;
