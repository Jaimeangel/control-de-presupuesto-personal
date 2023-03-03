import {formatFecha} from '../Helpers/FormatFecha'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const listIcons={
    Ahorro:iconoAhorro,
    Comida:iconoComida,
    Casa:iconoComida,
    Gastos_varios:iconoGastos,
    Ocio:iconoOcio,
    Salud:iconoSalud,
    Suscripciones:iconoSuscripciones,
}

function Gasto({gasto}) {
    const {categoria,id,nombre,cantidad,fecha}=gasto;
    const newDate=formatFecha(fecha)
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img 
                src={listIcons[categoria]} 
                alt='Icono gasto'
            />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">Agregado el:<span>{newDate}</span></p>
            </div>
        </div>
        <p className='cantidad-gasto'>{cantidad}</p>
    </div>
  )
}

export default Gasto;
