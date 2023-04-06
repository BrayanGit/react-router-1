import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Happy Cake</Navbar.Brand>
          {/* Links */}
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
            Contacto
          </Link>
          <Link to="/Listado_planes" className="text-white ms-3 text-decoration-none">
            Listado de Pasteles
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
