import { useState, useEffect } from "react";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";
import { api } from "../../services/api";



export function Home() {
	const [tags, setTags] = useState([]);
	const [ tagSelected, setTagSelectad ] = useState([]);

	function handleTagSelected(tagName){
		setTagSelectad([tagName]);
	}


	useEffect(() => {
		async function fetchTags() {
			const response = await api.get("/tags");
			setTags(response.data);
		}

		fetchTags();
	}, []);
	return (
		<Container>
			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Header />

			<Menu>
				<li>
					<ButtonText
						title="Todos"
						isActive
					/>
				</li>
				{
					tags && tags.map(tag => (

						<li>
							<ButtonText
								title={tag.name}
							/>
						</li>
					))
				}

			</Menu>

			<Search>
				<Input placeholder="Pesquisar pelo título" icon={FiSearch} />
			</Search>

			<Content>
				<Section title="Minhas notas">
					<Note data={{
						title: "React",
						tags: [
							{ id: "1", name: "react" },
							{ id: "2", name: "node" }
						]
					}}
					/>

				</Section>
			</Content>

			<NewNote to="/new">
				<FiPlus />
				Criar nota
			</NewNote>
		</Container>
	);
}