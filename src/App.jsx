import { useState } from 'react'
import Header from './Components/Header'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'

import './index.css'


function App() {
  const [presupuesto,setPresupuesto]=useState(0)
  const [isValidPresupuesto,setIsValidPresupuesto]=useState(false)
  const [modal,setModal]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)

  const handleModal=()=>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 600);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
      />
      {isValidPresupuesto && (
            <div className='nuevo-gasto'>
              <img 
                src={iconoNuevoGasto} 
                alt="icono nuevo gasto" 
                onClick={handleModal}
              />
            </div>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      }
    </div>
  )
}

export default App;
