import "../App.css";
import { useState, useRef } from "react";


function Transfers({ currentAccount, movements, accounts }) {
  const [accTransfer, setAccTransfer] = useState(null);
  const transferRef = useRef();
  const amountRef = useRef();

  const transfer = function (e) {
    e.preventDefault();
    const transferTo = transferRef.current.value;
    const amount = Number(amountRef.current.value);

    const acc = accounts.find((acc) => acc.username === transferTo);

    if (acc) {
      setAccTransfer(acc);
      const originBalance = movements.reduce(
        (total, movement) => total + movement,
        0
      );
      
     
      if (originBalance >= amount && amount > 0) {
        accTransfer.movements.push(amount);
        currentAccount.movements.push(-amount);
        console.log(accTransfer.movements, currentAccount.movements)
       
      }
    }
    
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer">
        <input
          type="text"
          className="form__input form__input--to"
          ref={transferRef}
        />
        <input
          type="number"
          className="form__input form__input--amount"
          ref={amountRef}
        />
        <button className="form__btn form__btn--transfer" onClick={transfer}>
          &rarr;
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
}
export default Transfers;
