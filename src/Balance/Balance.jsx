import React, { useMemo } from 'react';
import './Balance.css';

/**
 * Componente que muestra el balance actual de la cuenta
 * Incluye el saldo total y la fecha actual
 * @param {Array} movements - Array de movimientos de la cuenta
 */
function Balance({ movements }) {
  /**
   * Calcula el balance total de la cuenta
   * Utiliza useMemo para optimizar el rendimiento
   */
  const balance = useMemo(() => {
    return movements.reduce((total, movement) => total + movement.amount, 0);
  }, [movements]);

  /**
   * Obtiene y formatea la fecha actual en español
   * Incluye día de la semana, fecha completa y hora
   */
  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Capitaliza la primera letra del día de la semana
  const formattedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Balance actual</p>
        <p className="balance__date">
          {formattedDate}
        </p>
      </div>
      <p className="balance__value">{balance.toFixed(2)}€</p>
    </div>
  );
}

export default Balance;
