import "../App.css";
import { useState } from "react";

function Transfers({ currentAccount, movements, accounts }) {
  // Estado para la cuenta de destino de la transferencia
  const [accTransfer, setAccTransfer] = useState(null);
  const [transferError, setTransferError] = useState(""); // Estado para manejar errores

  const handleTransfer = (e) => {
    e.preventDefault();
    
    const transferTo = e.target.transferTo.value; // Usamos e.target para obtener el valor del campo
    const amount = Number(e.target.amount.value); // Convertimos el valor a número

    // Buscamos la cuenta de destino
    const acc = accounts.find((acc) => acc.username === transferTo);

    if (!acc) {
      setTransferError("Account not found"); // Error si no se encuentra la cuenta
      return;
    }

    setAccTransfer(acc);

    // Calculamos el saldo actual de la cuenta de origen
    const originBalance = movements.reduce((total, movement) => total + movement, 0);

    // Verificamos si la transferencia es posible
    if (originBalance >= amount && amount > 0) {
      // Actualizamos los movimientos de las cuentas
      acc.movements.push(amount);
      currentAccount.movements.push(-amount);
      setTransferError(""); // Limpiamos el error en caso de transferencia exitosa
      console.log(acc.movements, currentAccount.movements); // Verificación (puedes eliminarlo después)
    } else {
      setTransferError("Insufficient balance or invalid amount");
    }
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer" onSubmit={handleTransfer}>
        <label className="form__label">Transfer to</label>
        <input
          type="text"
          name="transferTo" // Usamos el atributo name para obtener los valores del formulario
          className="form__input form__input--to"
        />
        <label className="form__label">Amount</label>
        <input
          type="number"
          name="amount" // Usamos el atributo name para obtener los valores del formulario
          className="form__input form__input--amount"
        />
        <button className="form__btn form__btn--transfer" type="submit">
          &rarr;
        </button>
      </form>
      {transferError && <p className="error-message">{transferError}</p>} {/* Muestra el error si existe */}
    </div>
  );
}

export default Transfers;
