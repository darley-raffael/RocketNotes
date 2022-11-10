import "./style.js"
import { Container } from "./style.js"
import { Button } from "../../components/button"

export default function Details() {
  return(
    <Container>
      <h1>olá mundo</h1>
      <p>darley Raffael </p>
      <Button title="Clique aqui" loading />
      <Button title="Entrar" />
      <Button title="Voltar" />
    </Container>
  )
}