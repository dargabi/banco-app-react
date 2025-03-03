import './Summary.css'

function Summary({ movements }) {
  // Calculamos las entradas y salidas una sola vez en lugar de hacer filtros múltiples
  const sumIn = movements.filter(movement => movement > 0).reduce((total, movement) => total + movement, 0);
  const sumOut = movements.filter(movement => movement < 0).reduce((total, movement) => total + movement, 0);

  // Convertimos los valores a formato de moneda y los almacenamos
  const totalIn = `${sumIn.toFixed(2)}€`;
  const totalOut = `${sumOut.toFixed(2)}€`;

  // Calculamos el interés basado en las entradas
  const interest = `${(sumIn * 0.5).toFixed(2)}€`;  // Aplicamos `.toFixed(2)` para que tenga dos decimales

  return (
    <div className="summary">
      {/* Etiqueta y valor de las entradas */}
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{totalIn}</p>

      {/* Etiqueta y valor de las salidas */}
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{totalOut}</p>

      {/* Etiqueta y valor de los intereses */}
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{interest}</p>

      {/* Botón para ordenar (no implementado aún, si es necesario, se puede añadir la lógica) */}
      <button className="btn--sort">↓ Ordenar</button>

    </div>
  );
}

export default Summary;
