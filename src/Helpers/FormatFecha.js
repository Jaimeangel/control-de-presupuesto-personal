export function formatFecha(fecha){
    const newFecha= new Date(fecha)
    const formatNewFecha= newFecha.toLocaleString('es-Es',{
        year:'numeric',
        month:'long',
        day:'2-digit'
    })
    return formatNewFecha;
}