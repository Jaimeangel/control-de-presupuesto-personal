import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

function Header({presupuesto,setPresupuesto,setIsValidPresupuesto,isValidPresupuesto}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {
        !isValidPresupuesto ?
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
        :(
            <ControlPresupuesto
              presupuesto={presupuesto}
            />
        )
      }

    </header>
  )
}

export default Header;
