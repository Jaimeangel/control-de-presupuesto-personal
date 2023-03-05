import { useState,useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import cerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje';

function Modal({
    setModal,
    animarModal,
    setAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar,
    guardarGastoEditado
}){

    const [nombre,setNombre]=useState('');
    const [cantidad,setCantidad]=useState('')
    const [categoria,setCategoria]=useState('')
    const [mensaje,setMensaje]=useState('')
    const [idEditar,setIdEditar]=useState('')

    useEffect(()=>{
        if(Object.keys(gastoEditar).length){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setMensaje(gastoEditar.mensaje)
            setIdEditar(gastoEditar.id)
        }
    },[])

    const closeModal=()=>{
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
        if(Object.keys(gastoEditar).length){
            setGastoEditar({})
        }
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
        const fecha= Date.now()
        if(idEditar){
            guardarGastoEditado({
                fecha: fecha,
                id:idEditar,
                nombre:nombre,
                cantidad:cantidad,
                categoria:categoria
            })
        }else{
            guardarGasto({
                fecha: fecha,
                id:uuid().slice(0,10),
                nombre:nombre,
                cantidad:cantidad,
                categoria:categoria
            })
        }
        setNombre('');
        setCantidad('')
        setCategoria('')
        setIdEditar('')
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
                <legend>{gastoEditar.nombre?"Editar gasto":"Ingresa un nuevo gasto"}</legend>
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
                        <option value="Gastos_varios">Gastos varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                    </select>

                </div>

                
                <input
                    value={gastoEditar.nombre?"Guardar cambios":"Añadir gasto" }
                    type="submit" 
                />
                
            </form>
        </div>
    )
}

export default Modal;
