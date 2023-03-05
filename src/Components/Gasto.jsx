import {formatFecha} from '../Helpers/FormatFecha'
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


const listIcons={
    Ahorro:iconoAhorro,
    Comida:iconoComida,
    Casa:iconoCasa,
    Gastos_varios:iconoGastos,
    Ocio:iconoOcio,
    Salud:iconoSalud,
    Suscripciones:iconoSuscripciones,
}

function Gasto({gasto,setGastoEditar}) {
    const {categoria,id,nombre,cantidad,fecha}=gasto;
    const newDate=formatFecha(fecha)
    
    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={() => setGastoEditar(gasto)}>
            EDITAR
          </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
          >
            BORRAR
          </SwipeAction>
        </TrailingActions>
    );

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
                <p className='cantidad-gasto'>$ {cantidad}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto;
