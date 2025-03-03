import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Welcome from './Welcome/Welcome.jsx';
import Login from './Login/Login.jsx';
import Balance from './Balance/Balance.jsx';
import Movements from './Movements/Movements.jsx';
import Summary from './Summary/Summary.jsx';
import accounts from './Accounts/Accounts.jsx';
import Transfers from './Transfers/Transfers.jsx';
import Loan from './Loan/Loan.jsx';
import Close from './Close/Close.jsx';

/**
 * Componente principal de la aplicación bancaria.
 * Gestiona el estado global de la aplicación, incluyendo:
 * - La autenticación del usuario
 * - Los movimientos de la cuenta
 * - El temporizador de sesión
 */
function App() {
  // Estado para la cuenta activa y sus movimientos
  const [account, setAccount] = useState(null);
  const [movements, setMovements] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutos en segundos

  /**
   * Efecto para sincronizar los movimientos cuando cambia la cuenta activa
   */
  useEffect(() => {
    if (account) {
      setMovements([...account.movements]);
    }
  }, [account]);

  /**
   * Maneja el proceso de inicio de sesión
   * @param {string} user - Nombre de usuario
   * @param {string} pin - PIN de la cuenta
   */
  const handleLogin = (user, pin) => {
    setLoginError('');
    const currentAccount = accounts.find(
      acc => acc.username === user && acc.pin === Number(pin)
    );

    if (currentAccount) {
      setAccount(currentAccount);
      setMovements([...currentAccount.movements]);
    } else {
      setLoginError('Usuario o PIN incorrectos');
    }
  };

  /**
   * Efecto para gestionar el temporizador de cierre de sesión automático
   * La sesión expira después de 5 minutos de inactividad
   */
  useEffect(() => {
    let interval;
    if (account) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setAccount(null);
            setMovements([]);
            return 300;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [account]);

  /**
   * Formatea el tiempo restante en formato mm:ss
   * @param {number} seconds - Segundos totales
   * @returns {string} Tiempo formateado
   */
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  /**
   * Actualiza los movimientos de la cuenta
   * @param {Array} newMovements - Nuevos movimientos a establecer
   */
  const updateMovements = (newMovements) => {
    setMovements([...newMovements]);
    if (account) {
      account.movements = [...newMovements];
    }
  };

  return (
    <>
      <Container>
        <Navbar bg='Light' expand="lg" className='flex flex-row justify-content-between'>
          <Welcome account={account} />
          <img src="logo.png" alt="Logo" className="logo" />
          <Login onLogin={handleLogin} />
        </Navbar>
        {loginError && (
          <div className="alert alert-danger mt-3" role="alert">
            {loginError}
          </div>
        )}
      </Container>

      {account && (
        <Container>
          <Balance movements={movements} />
          <Movements movements={movements} />
          <Summary movements={movements} />
          <Transfers 
            currentAccount={account} 
            movements={movements}
            accounts={accounts}
            onMovementsUpdate={updateMovements}
          />
          <Loan 
            movements={movements}
            onMovementsUpdate={updateMovements}
          />
          <Close 
            accounts={accounts} 
            currentAccount={account} 
            setAccount={setAccount}
          />

          <p className="logout-timer">
            Sesión expirará en <span className="timer">{formatTime(timer)}</span>
          </p>
        </Container>
      )}
    </>
  );
}

export default App;
