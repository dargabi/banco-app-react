import React from 'react';
import './Movements.css';

/**
 * Componente que muestra el historial de movimientos de la cuenta
 * Incluye ingresos y retiros, ordenados por fecha
 * @param {Array} movements - Array de movimientos de la cuenta
 */
const Movements = ({ movements }) => {
  /**
   * Formatea una fecha ISO a formato español
   * @param {string} dateString - Fecha en formato ISO
   * @returns {string} Fecha formateada en español
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Ordenamos los movimientos por fecha, más recientes primero
  const sortedMovements = [...movements].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="movements">
      {sortedMovements.map((movement, index) => (
        <div key={index} className="movements__row">
          <div className={`movements__type movements__type--${movement.amount < 0 ? 'withdrawal' : 'deposit'}`}>
            {movement.amount < 0 ? 'Retiro' : 'Ingreso'}
          </div>
          <div className="movements__date">
            {formatDate(movement.date)}
          </div>
          <div className="movements__value">
            {movement.amount.toFixed(2)}€
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movements;
