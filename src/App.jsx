import { useState,useEffect } from 'react'
import Header from './Components/Header'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'
import './index.css'


function App() {
  const [presupuesto,setPresupuesto]=useState('')
  const [isValidPresupuesto,setIsValidPresupuesto]=useState(false)
  const [modal,setModal]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const [gastos,setGastos]=useState([])
  const [gastoEditar,setGastoEditar]=useState({})

  useEffect(()=>{
    if(Object.keys(gastoEditar).length){
      handleModal()
    }
  },[gastoEditar])

  const handleModal=()=>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 600);
  }

  const guardarGasto=(newGasto)=>{
    setGastos([...gastos,newGasto])
  }

  const guardarGastoEditado=(newGasto)=>{
    const newGastos=gastos.map(gasto=>gasto.id === newGasto.id ? newGasto:gasto)
    setGastos(newGastos)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        gastos={gastos}
      />
      {isValidPresupuesto && (
        <>

          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>

          <div className='nuevo-gasto'>
            <img 
              src={iconoNuevoGasto} 
              alt="icono nuevo gasto" 
              onClick={handleModal}
            />
          </div>

        </>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
          guardarGastoEditado={guardarGastoEditado}
        />
      }
    </div>
  )
}

export default App;
