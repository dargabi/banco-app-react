import { useState } from 'react';
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

function App() {
  // Estado para manejar la cuenta de usuario
  const [account, setAccount] = useState(null);

  // Manejo del inicio de sesión
  const handleLogin = (user, pin) => {
    const currentAccount = accounts.find(acc => acc.username === user && acc.pin === Number(pin));
    
    if (currentAccount) {
      setAccount(currentAccount);
      // Eliminar o comentar estos console.log en producción
      console.log("current account:", currentAccount);
      console.log("user:", user);
      console.log("pin:", pin);
    }
  };

  return (
    <>
      <Container>
        <Navbar bg='Light' expand="lg" className='flex flex-row justify-content-between'>
          {/* Componente de bienvenida que muestra el estado de la cuenta */}
          <Welcome account={account} />
          
          {/* Logo de la aplicación */}
          <img src="logo.png" alt="Logo" className="logo" />

          {/* Componente de inicio de sesión */}
          <Login onLogin={handleLogin} />
        </Navbar>
      </Container>

      {/* Solo renderizar el contenido de la cuenta si `account` existe */}
      {account && (
        <Container>
          {/* Sección de Balance */}
          <Balance movements={account.movements} />

          {/* Sección de Movimientos */}
          <Movements movements={account.movements} />

          {/* Sección de Resumen */}
          <Summary movements={account.movements} />

          {/* Operación de Transferencias */}
          <Transfers currentAccount={account} movements={account.movements} accounts={accounts} />

          {/* Operación de Préstamo */}
          <Loan movements={account.movements} />

          {/* Operación de Cierre de Cuenta */}
          <Close accounts={accounts} currentAccount={account} setAccount={setAccount} />

          {/* Temporizador de cierre de sesión */}
          <p className="logout-timer">
            You will be logged out in <span className="timer">05:00</span>
          </p>
        </Container>
      )}
    </>
  );
}

export default App;
