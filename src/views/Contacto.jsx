import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos, en que te podemos ayudar?</h1>
      <LoginForm />
    </Container>
  );
};