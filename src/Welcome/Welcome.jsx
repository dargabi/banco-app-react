import './Welcome.css';

function Welcome({ account }) {
  // Si no existe la cuenta, mostramos un mensaje de inicio de sesión
  if (!account) return <p className="welcome">Inicia sesión para continuar</p>;

  // Extraemos el primer nombre de la cuenta
  const name = account.owner.split(' ')[0] || 'Usuario';

  return <p className="welcome">¡Bienvenido/a, {name}!</p>;
}

export default Welcome;
