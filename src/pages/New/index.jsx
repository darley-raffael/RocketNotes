import { useState } from "react";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section"; 
import { Header } from "../../components/Header"; 
import { Button } from "../../components/Button"; 
import { Input } from "../../components/Input";
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
		if(!title){
			return alert("Digite um título");
		}
		if(newLink){
			return alert("Salve o link antes de criar a nota ");
		}
		if(newTag){
			return alert("Salve a tag antes de criar a nota");
		}

		await api.post("/notes", {
			title,
			description,
			tags,
			links,
		});

		alert("Nota criada com sucesso!");
		navigate(-1);
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
						loading
						onClick={ handleNewNote }
					/>
				</Form>
			</main>
		</Container>
	);
}