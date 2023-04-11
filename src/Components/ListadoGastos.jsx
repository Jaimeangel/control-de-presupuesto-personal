import Gasto from "./Gasto";

function ListadoGastos(
  {
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrado
  }
  ) {
  return (
    <div className="listado-gastos contenedor">
        {
          filtro ? 
          (
            <>
              <h2>{gastosFiltrado.length ? 'Gastos':'Aun no hay gastos'}</h2>
              {
                gastosFiltrado.map(gasto=>(
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                ))
              }
            </>
          ):
          (
            <>
              <h2>{gastos.length ? 'Gastos':'Aun no hay gastos'}</h2>
              {
                gastos.map(gasto=>(
                  <Gasto
                      key={gasto.id}
                      gasto={gasto}
                      setGastoEditar={setGastoEditar}
                      eliminarGasto={eliminarGasto}
                  />
                ))
              }
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos;
