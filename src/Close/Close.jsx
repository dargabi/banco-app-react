import { useState } from "react";
import "../App.css";

function Close({ currentAccount, accounts, setAccount }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCloseAccount = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const user = e.target.user.value;
    const pin = e.target.pin.value;

    if (!user || !pin) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (user !== currentAccount.username || String(currentAccount.pin) !== pin) {
      setError("Usuario o PIN incorrectos");
      return;
    }

    try {
      // Filtrar la cuenta actual del array de cuentas
      const updatedAccounts = accounts.filter(
        (acc) => acc.username !== user || String(acc.pin) !== pin
      );

      if (updatedAccounts.length === accounts.length) {
        setError("No se pudo encontrar la cuenta");
        return;
      }

      // Actualizar el estado y mostrar mensaje de éxito
      setAccount(null);
      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError("Error al cerrar la cuenta. Por favor, intente nuevamente.");
      console.error("Error al cerrar cuenta:", error);
    }
  };

  return (
    <div className="operation operation--close">
      <h2>Cerrar cuenta</h2>
      <form className="form form--close" onSubmit={handleCloseAccount}>
        <input
          type="text"
          name="user"
          className="form__input form__input--user"
          placeholder="Usuario"
          required
        />
        <input
          type="password"
          name="pin"
          maxLength="6"
          className="form__input form__input--pin"
          placeholder="PIN"
          required
        />
        <button type="submit" className="form__btn form__btn--close">
          &rarr;
        </button>
        <label className="form__label">Confirmar usuario</label>
        <label className="form__label">Confirmar PIN</label>
      </form>
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      {success && (
        <p className="success-message" style={{ color: 'green' }}>
          Cuenta cerrada exitosamente
        </p>
      )}
    </div>
  );
}

export default Close;
