import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login({ onLogin }) {
  const userRef = useRef();
  const pinRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const pin = pinRef.current.value;
    onLogin(user, pin);
  };
  return (
    <Form className="d-flex align-items-center gap-2" onSubmit={handleLogin}>
      <Form.Group>
        <Form.Control
          type="text"
          size="sm"
          className="rounded-pill"
          placeholder="user"
          ref={userRef}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          size="sm"
          className="rounded-pill"
          placeholder="PIN"
          maxLength="4"
          ref={pinRef}
        />
      </Form.Group>
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