import './Summary.css';
import { useMemo } from 'react';

function Summary({ movements }) {
  // Calculamos los totales usando useMemo para mejorar el rendimiento
  const { sumIn, sumOut, interest } = useMemo(() => {
    const inMovements = movements.filter(mov => mov > 0);
    const outMovements = movements.filter(mov => mov < 0);
    
    return {
      sumIn: inMovements.reduce((acc, mov) => acc + mov, 0),
      sumOut: Math.abs(outMovements.reduce((acc, mov) => acc + mov, 0)),
      interest: (inMovements.reduce((acc, mov) => acc + mov, 0) * 0.5)
    };
  }, [movements]);

  return (
    <div className="summary">
      <p className="summary__label">Ingresos</p>
      <p className="summary__value summary__value--in">{sumIn.toFixed(2)}€</p>
      
      <p className="summary__label">Gastos</p>
      <p className="summary__value summary__value--out">{sumOut.toFixed(2)}€</p>
      
      <p className="summary__label">Intereses</p>
      <p className="summary__value summary__value--interest">{interest.toFixed(2)}€</p>
      
    </div>
  );
}

export default Summary;
