import "../App.css";
import { useState } from "react";

/**
 * Componente para realizar transferencias entre cuentas
 * @param {Object} currentAccount - Cuenta actual del usuario
 * @param {Array} movements - Movimientos de la cuenta actual
 * @param {Array} accounts - Lista de todas las cuentas disponibles
 * @param {Function} onMovementsUpdate - Función para actualizar los movimientos
 */
function Transfers({ currentAccount, movements, accounts, onMovementsUpdate }) {
  // Estados para manejar errores y mensajes de éxito
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /**
   * Maneja el proceso de transferencia
   * Valida los datos y realiza la transferencia si todo es correcto
   * @param {Event} e - Evento del formulario
   */
  const handleTransfer = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const transferTo = e.target.transferTo.value;
    const amount = Number(e.target.amount.value);
    const currentDate = new Date().toISOString();

    // Validación del monto
    if (amount <= 0) {
      setError("La cantidad debe ser positiva");
      return;
    }

    // Búsqueda y validación de la cuenta destino
    const destinationAccount = accounts.find((acc) => acc.username === transferTo);

    if (!destinationAccount) {
      setError("Cuenta no encontrada");
      return;
    }

    if (destinationAccount.username === currentAccount.username) {
      setError("No puedes transferir a tu propia cuenta");
      return;
    }

    // Validación del saldo disponible
    const currentBalance = movements.reduce((total, mov) => total + mov.amount, 0);

    if (currentBalance < amount) {
      setError("Saldo insuficiente");
      return;
    }

    try {
      // Registro de la transferencia en ambas cuentas
      destinationAccount.movements.push({
        amount: amount,
        date: currentDate
      });

      const newMovements = [
        ...movements,
        {
          amount: -amount,
          date: currentDate
        }
      ];
      
      // Actualización del estado
      onMovementsUpdate(newMovements);
      
      // Limpieza y feedback
      e.target.reset();
      setSuccess(true);
    } catch (error) {
      setError("Error al realizar la transferencia. Por favor, intente nuevamente.");
      console.error("Error en transferencia:", error);
    }
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transferir dinero</h2>
      <form className="form form--transfer" onSubmit={handleTransfer}>
        <input
          type="text"
          name="transferTo"
          className="form__input form__input--to"
          placeholder="Usuario destino"
          required
        />
        <input
          type="number"
          name="amount"
          className="form__input form__input--amount"
          placeholder="Cantidad"
          min="0.01"
          step="0.01"
          required
        />
        <button className="form__btn form__btn--transfer" type="submit">
          &rarr;
        </button>
        <label className="form__label">Transferir a</label>
        <label className="form__label">Cantidad</label>
      </form>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      {success && (
        <p className="success-message" style={{ color: 'green' }}>
          ¡Transferencia realizada con éxito!
        </p>
      )}
    </div>
  );
}

export default Transfers;
