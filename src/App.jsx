import { useState,useEffect } from 'react'
import Header from './Components/Header'
import iconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'
import FilterGastos from './Components/FilterGastos'
import './index.css'


function App() {
  const [presupuesto,setPresupuesto]=useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto,setIsValidPresupuesto]=useState(false)
  const [modal,setModal]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const [gastos,setGastos]=useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')):[]
  )
  const [gastoEditar,setGastoEditar]=useState({})
  const [filtro,setFiltro]=useState('')
  const [gastosFiltrados,setGastosFiltrados]=useState([])

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

  const eliminarGasto=(idEliminar)=>{
    const newGastos=gastos.filter(gastosState=>gastosState.id!=idEliminar)
    setGastos(newGastos)
  }

  useEffect(()=>{
    localStorage.setItem('presupuesto',presupuesto)
  },[presupuesto])

  useEffect(()=>{
    if(Number(presupuesto)>0){
      setIsValidPresupuesto(true)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos) ?? [])
  },[gastos])

  useEffect(()=>{
    if(filtro){
      const gastosFiltrado=gastos.filter(gastosState=>gastosState.categoria===filtro)
      console.log(gastosFiltrado)
      setGastosFiltrados(gastosFiltrado)
    }
  },[filtro])

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        gastos={gastos}
        setGastos={setGastos}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <FilterGastos
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrado={gastosFiltrados}
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
