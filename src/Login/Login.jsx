import React, { useState } from 'react'; 
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ onLogin }) {
  // Usamos el estado local para manejar los valores de los campos
  const [user, setUser] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  // Manejador de submit
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!user || !pin) {
      setError('Por favor, complete todos los campos');
      return;
    }

    onLogin(user, pin); // Llamamos la función onLogin con los valores actuales
  };

  return (
    <Form className="d-flex align-items-center gap-2" onSubmit={handleLogin}>
      {/* Campo para ingresar el usuario */}
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          className="rounded-pill"
          placeholder="Usuario"
          value={user} // Vinculamos el valor con el estado
          onChange={(e) => setUser(e.target.value)} // Actualizamos el estado cuando el valor cambia
          required
        />
      </Form.Group>

      {/* Campo para ingresar el PIN */}
      <Form.Group>
        <Form.Control
          type="password"
          size="sm"
          className="rounded-pill"
          placeholder="PIN"
          maxLength="4"
          value={pin} // Vinculamos el valor con el estado
          onChange={(e) => setPin(e.target.value)} // Actualizamos el estado cuando el valor cambia
          required
        />
      </Form.Group>

      {/* Botón de submit */}
      <Button
        variant="outline-secondary"
        type="submit"
        size="sm"
        className="rounded-pill"
      >
        →
      </Button>

      {error && <span className="text-danger ms-2">{error}</span>}
    </Form>
  );
}

export default Login;
