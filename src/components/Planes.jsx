import { Accordion } from "react-bootstrap";

export default function Navigation() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pastel - Básico</Accordion.Header>
        <Accordion.Body>
           Pastel para 10 personas por solo $20.000 CLP.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pastel - Estándar </Accordion.Header>
        <Accordion.Body>
           Pastel para 20 personas por solo $25.000 CLP, disponibles chocolate, piña y selva negra.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pastel - Premiun</Accordion.Header>
        <Accordion.Body>
           Pastel para 30 personas por solo $35.000 CLP, con ingredientes  a su eleccion.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
