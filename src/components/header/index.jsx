import { Container, Profile } from "./style";

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                src="https://github.com/darley-raffael.png" 
                alt="foto de perfil do usuário" />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Dárley Raffael</strong>
                </div>
            </Profile>

        </Container>
    );
}