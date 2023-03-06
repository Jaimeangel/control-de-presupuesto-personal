import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';

function Header(
  {
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
    isValidPresupuesto,
    gastos,
    setGastos
  }) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {
        !isValidPresupuesto ?
          (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
          )
        :(
            <ControlPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              gastos={gastos}
              setGastos={setGastos}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        )
      }

    </header>
  )
}

export default Header;
