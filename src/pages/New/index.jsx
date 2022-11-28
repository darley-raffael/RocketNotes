import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Container, Form } from "./styles";


export function New(){
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">voltar</a>
                    </header>
                    <Input placeholder="Título" />
                </Form>
            </main>
        </Container>
    )
}