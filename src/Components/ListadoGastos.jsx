import Gasto from "./Gasto";

function ListadoGastos({gastos}) {
  return (
    <div className="listado-gastos contenedor">

        <h2>{gastos.length ? 'Gastos':'Aun no hay gastos'}</h2>
        {gastos.map(gasto=>(
            <Gasto
                gasto={gasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos;
