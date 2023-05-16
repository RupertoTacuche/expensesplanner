import { useState } from "react";
import Mensaje from "./Mensaje";



const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || Number(presupuesto) < 0 ){
            setMensaje('Is not a valid budget')
        } else {
            console.log('Its a valid budget')
        }
        
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit = {handlePresupuesto} className="formulario">
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

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }

        </form>
    </div>
  )
}
export default NuevoPresupuesto