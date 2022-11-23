import "./style.js"
import { Container, Links } from "./style.js"
import { Header } from "../../components/header/index.jsx"
import { Content } from "./style"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tag } from "../../components/tags"
import { ButtonText } from "../../components/buttonText"

export function Details() {
  return (

    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium tenetur repudiandae nihil quod facere earum ad at possimus corrupti, excepturi fuga! Delectus deserunt numquam non unde obcaecati sequi qui! 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum porro, voluptatum temporibus expedita quisquam, ducimus quasi molestias rem repellat architecto velit soluta! Natus nemo, ullam hic labore enim beatae magnam!
          </p>
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
        </Content>
      </main>

    </Container>
  )
}