import { useRef } from "react";  // Importa el hook useRef de React para acceder a elementos DOM directamente
import "../App.css";  // Importa los estilos del archivo App.css

function Close({ currentAccount, accounts, setAccount }) {
  // Se definen las referencias a los campos de entrada para el usuario y el PIN
  const inputUser = useRef();  // Referencia al campo de texto del nombre de usuario
  const inputPin = useRef();   // Referencia al campo de texto del PIN

  // Función que se ejecuta cuando el usuario intenta cerrar la cuenta
  const handleCloseAccount = (e) => {
    e.preventDefault();  // Previene el comportamiento por defecto del formulario (recargar la página)

    // Obtiene los valores de los campos de usuario y PIN
    const user = inputUser.current.value;
    const pin = inputPin.current.value;

    // Verifica si el nombre de usuario y el PIN coinciden con los de la cuenta activa
    if (user === currentAccount.username && pin === String(currentAccount.pin)) {
      // Si los datos son correctos, se actualiza la lista de cuentas excluyendo la cuenta cerrada
      const updatedAccounts = accounts.filter((acc) => acc.username !== user || String(acc.pin) !== pin);
      
      // Se actualiza el estado para quitar la cuenta activa
      setAccount(null);
      console.log(updatedAccounts, "Cuenta cerrada exitosamente");  // Muestra en consola la nueva lista de cuentas y el mensaje de éxito
    } else {
      console.error("Usuario o PIN incorrectos.");  // Si los datos no coinciden, muestra un mensaje de error
    }

    // Limpia los campos de entrada para que el formulario quede vacío
    inputUser.current.value = "";
    inputPin.current.value = "";
  };

  return (
    <div className="operation operation--close">
      <h2>Cerrar cuenta</h2>  {/* Título del formulario */}
      <form className="form form--close">
        {/* Campo para ingresar el nombre de usuario */}
        <input type="text" className="form__input form__input--user" ref={inputUser} />
        
        {/* Campo para ingresar el PIN, limitado a 6 caracteres */}
        <input
          type="password"
          maxLength="6"
          className="form__input form__input--pin"
          ref={inputPin}
        />
        
        {/* Botón para enviar el formulario y cerrar la cuenta */}
        <button onClick={handleCloseAccount} className="form__btn form__btn--close">
          &rarr; {/* Representa una flecha hacia la derecha */}
        </button>
        
        {/* Etiquetas que describen los campos de entrada */}
        <label className="form__label">Confirmar usuario</label>
        <label className="form__label">Confirmar PIN</label>
      </form>
    </div>
  );
}

export default Close;  // Exporta el componente Close para que pueda ser utilizado en otras partes de la aplicación
