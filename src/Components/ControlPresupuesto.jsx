import { useState,useEffect } from "react";

function ControlPresupuesto({presupuesto,gastos}) {

    const [gastado,setGastado]=useState(0)
    const [disponible,setDisponible]=useState(0)

    const formatearCantidad=(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    useEffect(()=>{
      const dineroGastado=gastos.reduce((total,gasto)=>gasto.cantidad+total,0)    
      const disponible=presupuesto-dineroGastado
      setGastado(dineroGastado)
      setDisponible(disponible)
    },[gastos])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
        </p>

        <p>
            <span>Disponible:</span>{formatearCantidad(disponible)}
        </p>

        <p>
            <span>Gastado:</span>{formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto;
