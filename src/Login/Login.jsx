import React, { useState } from 'react'; // Usamos useState en vez de useRef para simplificar el manejo del estado
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ onLogin }) {
  // Usamos el estado local para manejar los valores de los campos
  const [user, setUser] = useState('');
  const [pin, setPin] = useState('');

  // Manejador de submit
  const handleLogin = (e) => {
    e.preventDefault();
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
          placeholder="user"
          value={user} // Vinculamos el valor con el estado
          onChange={(e) => setUser(e.target.value)} // Actualizamos el estado cuando el valor cambia
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
        />
      </Form.Group>

      {/* Botón de submit */}
      <Button
        variant="outline-secondary"
        type="submit"
        className="rounded-circle"
        size="sm"
      >
        →
      </Button>
    </Form>
  );
}

export default Login;
