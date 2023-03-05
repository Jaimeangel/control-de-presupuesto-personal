import Gasto from "./Gasto";

function ListadoGastos({gastos,setGastoEditar}) {
  return (
    <div className="listado-gastos contenedor">

        <h2>{gastos.length ? 'Gastos':'Aun no hay gastos'}</h2>
        {gastos.map(gasto=>(
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
            />
        ))}
    </div>
  )
}

export default ListadoGastos;
