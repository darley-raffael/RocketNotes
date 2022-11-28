import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/input';
import { Button } from '../../components/button';




export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>


            <Form>
            <Avatar>
                <img 
                src="https://github.com/darley-raffael.png" 
                alt="Foto do Usuário" />

                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id='avatar' />
                </label>
            </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>

        </Container>
    )
}