import { Container } from "react-bootstrap";
import Planes from "../components/Planes";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Listado de los 3 mejores pasteles!</h1>
      <Planes />
    </Container>
  );
};
