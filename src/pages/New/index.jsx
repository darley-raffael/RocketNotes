import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";


export function New() {
	return (
		<Container>
			<Header />

			<main>
				<Form>
					<header>
						<h1>Criar Nota</h1>
						<Link to="/" >voltar</Link>
					</header>
					<Input placeholder="Título" />
					<Textarea placeholder="Observações" />

					<Section title="Links Úteis" >
						<NoteItem value="https://www.rocketseat.com.br/" />

						<NoteItem isNew placeholder="Novo link" />
					</Section>

					<Section title="Marcadores">
						<div className="tags" >
							<NoteItem value="React" />
							<NoteItem isNew placeholder="Nova tag" />
						</div>
					</Section>

					<Button title="Salvar" />
				</Form>
			</main>
		</Container>
	);
}