import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje';

function Modal({setModal,animarModal,setAnimarModal,guardarGasto}) {

    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState(0)
    const [categoria,setCategoria]=useState('')
    const [mensaje,setMensaje]=useState('')

    const closeModal=()=>{
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
               setMensaje('') 
            }, 2000);
            return
        }
        const unique_id = uuid();
        const small_id = unique_id.slice(0,10)
        guardarGasto({
            id:small_id,
            nombre:nombre,
            cantidad:cantidad,
            categoria:categoria
        })
        
        setNombre('');
        setCantidad(0)
        setCategoria('')
        closeModal()
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
            <form
                onSubmit={handleSubmit} 
                className={`formulario ${animarModal &&'animar'}`}
            >
                <legend>Ingresa un nuevo gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

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
