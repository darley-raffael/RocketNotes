import { useState } from "react";
import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";


export function New() {
	const [ links, setLinks ] = useState([]);
	const [ newLink, setNewLink ] = useState("");
	
	function handleAddLink(){
		setLinks(lastState => [...lastState, newLink]);
		setNewLink("");

	}
	function handleRemoveLink(deleted){
		setLinks(lastState => lastState.filter(link => link !== deleted));
	}
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
						{
							links.map((link, index) => (
								<NoteItem 
									key={String(index)}
									value={link}
									onClick={() => handleRemoveLink(link)}
								/>
							))
						}
						<NoteItem 
							isNew 
							placeholder="Novo link" 
							value={newLink}
							onChange={e => setNewLink(e.target.value)}
							onClick={ handleAddLink }
						/>
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