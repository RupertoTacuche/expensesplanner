import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({ 
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto}) => {
  return (
    <header>
        <h1> Expenses Planner</h1>
        {isValidPresupuesto ? (
          <p>Budget Control</p>
        ):(
            
                <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
        )}


    </header>
  )
}
export default Header