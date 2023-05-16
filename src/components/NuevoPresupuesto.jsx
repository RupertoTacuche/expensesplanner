const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario">
            <div className="campo">
                <label>Define Budget</label>
                <input 
                    className="nuevo-presupuesto"
                    type="text"
                    placeholder="Add your Budget"
                    value={presupuesto}
                    onChange={ (e) => setPresupuesto(e.target.value)}
                    
                />
            </div>

            <input type="submit" value="Add"  />

        </form>
    </div>
  )
}
export default NuevoPresupuesto