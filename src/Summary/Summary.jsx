import './Summary.css'

function Summary({movements}){
 

  const sumIn = movements.filter(movement => movement > 0).reduce((total, movement) => total + movement, 0)
  const totalIn = `${sumIn.toFixed(2)}€`

  const sumOut = movements.filter(movement => movement < 0).reduce((total, movement) => total + movement, 0)
  const totalOut = `${sumOut.toFixed(2)}€`

  const interest = sumIn * 0.5+"€"

    return (
        <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">{totalIn}€</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">{totalOut}€</p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">{interest}</p>
        <button className="btn--sort">&downarrow; SORT</button>
      </div>
    )
}

export default Summary