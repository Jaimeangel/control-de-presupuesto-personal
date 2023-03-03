import {formatFecha} from '../Helpers/FormatFecha'

function Gasto({gasto}) {
    const {categoria,id,nombre,cantidad,fecha}=gasto;
    const newDate=formatFecha(fecha)
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
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
