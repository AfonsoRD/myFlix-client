import { useState } from 'react';
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Col,
  Row
} from 'react-bootstrap';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch('https://movie-api-drab.vercel.app/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful');
        window.location.href = '/login';
      } else {
        alert('Signup failed');
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Signup and Flix</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId='formUsername'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type='text'
                      value={username}
                      minLength='5'
                      pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder='Enter a username'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formPassword'>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="^[A-Za-z0-9 .,'\-!?%&]+$"
                      placeholder='Choose your password'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      minLength='5'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Exaple@mail.com'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formBirthday'>
                    <Form.Label>Birthday: </Form.Label>
                    <Form.Control
                      type='date'
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant='primary'
                    type='submit'
                  >
                    Signup
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
