import "./style.js"
import { Container, Links } from "./style.js"
import { Header } from "../../components/header/index.jsx"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tag } from "../../components/tags"
import { ButtonText } from "../../components/buttonText"

export default function Details() {
  return (

    <Container>
      <Header />

    <ButtonText title="Excluir nota" />

      <Section title="Links Úteis" >
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores" >
          <Tag title="Express" />
          <Tag title="Node" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}