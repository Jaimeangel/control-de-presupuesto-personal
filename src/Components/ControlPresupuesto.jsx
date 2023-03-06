import { useState,useEffect } from "react";
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({presupuesto,gastos}) {

    const [gastado,setGastado]=useState(0)
    const [disponible,setDisponible]=useState(0)
    const [percentage,setPercentage]=useState(0)

    const formatearCantidad=(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        })
    }

    const calcularPorcentaje=()=>{
      const porcentageDisponible=(((gastado/presupuesto)*100)).toFixed(2);
      setPercentage(porcentageDisponible)
    }

    useEffect(()=>{
      const dineroGastado=gastos.reduce((total,gasto)=>gasto.cantidad+total,0)
      const disponible=presupuesto-dineroGastado
      setGastado(dineroGastado)
      setDisponible(disponible)
    },[gastos])

    useEffect(()=>{
      calcularPorcentaje()
    },[gastado])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar 
          value={percentage} 
          text={`${percentage}% Gastado`} 
          styles={buildStyles({
            pathColor:percentage>100 ? '#DC2626':'#3B82F6',
            textColor:percentage>100 ? '#DC2626':'#3B82F6'
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
        </p>

        <p className={disponible < 0 && 'negativo'}>
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
