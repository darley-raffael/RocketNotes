import { Container, Profile, Logout } from "./style";
import {RiShutDownLine} from "react-icons/ri"

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src="https://github.com/darley-raffael.png" 
                alt="foto de perfil do usuário" />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Dárley Raffael</strong>
                </div>
            </Profile>
            <Logout>
            <RiShutDownLine/>
            </Logout>

        </Container>
    );
}