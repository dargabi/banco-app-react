import './Welcome.css';

function Welcome({ account }) {
  // Si no existe la cuenta, mostramos un mensaje de inicio de sesión
  if (!account) return <p className="welcome">Inicia sesión para continuar</p>;

  // Extraemos el primer nombre de la cuenta, asegurándonos de que no falle si no hay espacios
  const name = account.owner.split(' ')[0] || 'User'; // En caso de que no haya un nombre (solo un nombre de usuario sin espacio)

  return <p className="welcome">Bienvenido, {name}</p>;
}

export default Welcome;
