import { useState } from "react";
import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Header } from "../../components/header";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { Link, useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { api } from "../../services/api";


export function New() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [ links, setLinks ] = useState([]);
	const [ newLink, setNewLink ] = useState("");

	const [ tags, setTags ] = useState([]);
	const [ newTag, setNewTag ] = useState("");

	const navigate = useNavigate();
	
	function handleAddLink(){
		setLinks(lastState => [...lastState, newLink]);
		setNewLink("");

	}
	function handleRemoveLink(deleted){
		setLinks(lastState => lastState.filter(link => link !== deleted));
	}

	function handleAddTags(){
		setTags(lastState => [...lastState, newTag]);

		setNewTag("");
	}

	function handleRemoveTag(deleted){
		setTags(lastState => lastState.filter(tag => tag !== deleted));
	}

	async function handleNewNote(){
		await api.post("/notes", {
			title,
			description,
			tags,
			links,
		});

		alert("Nota criada com sucesso!");
		navigate("/");
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
					<Input 
						placeholder="Título" 
						onChange={ e => setTitle(e.target.value)}
					/>
					<Textarea 
						placeholder="Observações"
						onChange={ e => setDescription(e.target.value)}
					/>

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
							{
								tags.map((tag, index) => (

									<NoteItem 
										key={String(index)}
										value={tag}
										onClick={() => handleRemoveTag(tag)}
									/>
								))

							}
							
							<NoteItem 
								isNew 
								placeholder="Nova tag"
								value={newTag} 
								onChange={ e => setNewTag( e.target.value )}
								onClick={handleAddTags}
							/>
						</div>
					</Section>

					<Button 
						title="Salvar" 
						onClick={ handleNewNote }
					/>
				</Form>
			</main>
		</Container>
	);
}