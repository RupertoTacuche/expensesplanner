const ControlPresupuesto = ({presupuesto}) => {

    console.log(presupuesto)
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency', currency: 'USD' })
        
    }
 
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p> Graph Here </p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span>{formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Available: </span>{formatearCantidad(0)}
            </p>

            <p>
                <span>Spent Money: </span>{formatearCantidad(0)}
            </p>

        </div>
        
    </div>
  )
}
export default ControlPresupuesto