import { useState,useEffect } from "react"

function FilterGastos({filtro,setFiltro}) {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label htmlFor="filtrar">Filtrar gastos</label>
                <select 
                    id="filtrar"
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                        <option value="">Todas las categorias</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Gastos_varios">Gastos varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default FilterGastos;
