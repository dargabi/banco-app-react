import "../App.css"
import {useRef } from "react";

function Loan({movements}){
  const amountRef = useRef()
  const limit = 200


  const loan = function(e){
    e.preventDefault()
    const amountLoan = Number(amountRef.current.value)
    const originBalance = movements.reduce((total, movement) => total + movement, 0)
    const limitLoan = (limit/100) * originBalance
    if(amountLoan > 0 && amountLoan <= limitLoan  ){
      movements.push(amountLoan)
      console.log(movements)
    }
    else{
      console.log("No cumple requisitos")
    }

  }


    return(
        <div className="operation operation--loan">
        <h2>Request loan</h2>
        <form className="form form--loan">
          <input type="number" className="form__input form__input--loan-amount" ref={amountRef}/>
          <button className="form__btn form__btn--loan" onClick={loan}>&rarr;</button>
          <label className="form__label form__label--loan">Amount</label>
        </form>
      </div>

    )
}

export default Loan