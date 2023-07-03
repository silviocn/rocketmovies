import { Container } from "./styles";

export function Section({ title, description, children }) {
  return (
    <Container>
      <h2>{title}{description}</h2>
      {children}
    </Container>
  );
}