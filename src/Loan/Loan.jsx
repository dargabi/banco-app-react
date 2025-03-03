import "../App.css";
import { useState } from "react";

function Loan({ movements }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const LOAN_LIMIT_PERCENTAGE = 200; // 200% del balance actual

  const handleLoan = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const amountRequested = Number(e.target.amount.value);
    const currentBalance = movements.reduce((total, mov) => total + mov, 0);
    const maxLoanAmount = (LOAN_LIMIT_PERCENTAGE / 100) * currentBalance;

    // Validaciones
    if (amountRequested <= 0) {
      setError("El monto debe ser positivo");
      return;
    }

    if (amountRequested > maxLoanAmount) {
      setError(`El préstamo máximo permitido es ${maxLoanAmount.toFixed(2)}€`);
      return;
    }

    try {
      // Procesar el préstamo
      movements.push(amountRequested);
      
      // Limpiar formulario y mostrar éxito
      e.target.reset();
      setSuccess(true);
    } catch (error) {
      setError("Error al procesar el préstamo. Por favor, intente nuevamente.");
      console.error("Error en préstamo:", error);
    }
  };

  return (
    <div className="operation operation--loan">
      <h2>Solicitar préstamo</h2>
      <form className="form form--loan" onSubmit={handleLoan}>
        <input
          type="number"
          name="amount"
          className="form__input form__input--loan-amount"
          placeholder="Cantidad"
          min="1"
          step="0.01"
          required
        />
        <button type="submit" className="form__btn form__btn--loan">
          &rarr;
        </button>
        <label className="form__label">Cantidad</label>
      </form>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      {success && (
        <p className="success-message" style={{ color: 'green' }}>
          ¡Préstamo aprobado y depositado!
        </p>
      )}
    </div>
  );
}

export default Loan;
