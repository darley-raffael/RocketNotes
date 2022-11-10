import "./style.js"
import { Container } from "./style.js"
import { Header } from "../../components/header/index.jsx"
import { Button } from "../../components/button"

export default function Details() {
  return(
    
    <Container>
      <Header/>
      <Button title="Voltar" />
    </Container>
  )
}