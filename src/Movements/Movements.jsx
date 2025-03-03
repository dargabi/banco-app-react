import React from 'react';
import './Movements.css';

const Movements = ({ movements }) => {
  // Convertimos los movimientos una sola vez antes del retorno
  const processedMovements = movements.map(movement => ({
    value: movement,
    type: movement < 0 ? 'withdrawal' : 'deposit',
    date: '24/01/2037' // Utilizamos una fecha fija, pero esto podría ser dinámico si fuera necesario
  }));

  return (
    <div className="movements">
      {processedMovements.map((movement, index) => (
        <div key={index} className="movements__row">
          {/* Mostramos el tipo de movimiento */}
          <div className={`movements__type movements__type--${movement.type}`}>
            {movement.type === 'deposit' ? 'Deposit' : 'Withdrawal'}
          </div>
          {/* Fecha del movimiento */}
          <div className="movements__date">{movement.date}</div>
          {/* Valor del movimiento */}
          <div className="movements__value">{movement.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Movements;
