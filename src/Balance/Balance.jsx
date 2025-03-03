import React, { useMemo } from 'react'; // Importamos React y useMemo
import './Balance.css'; // Importamos el archivo de estilo CSS

// Componente Balance que recibe la prop "movements"
function Balance({ movements }) {
  
  // Usamos useMemo para evitar recálculos innecesarios del balance
  const balance = useMemo(() => {
    // Reducimos la lista de movimientos sumando todos los valores
    return movements.reduce((total, movement) => total + movement, 0);
  }, [movements]); // El cálculo solo se vuelve a hacer si "movements" cambia

  return (
    <div className="balance">
      {/* Div que contiene la información del balance */}
      <div>
        <p className="balance__label">Balance actual</p> {/* Título "Balance actual" */}
        <p className="balance__date">
          A fecha de <span className="date">05/03/2037</span> {/* Fecha estática */}
        </p>
      </div>
      {/* Mostramos el balance con dos decimales */}
      <p className="balance__value">{balance.toFixed(2)}€</p>
    </div>
  );
}

// Exportamos el componente Balance para poder usarlo en otros archivos
export default Balance;
