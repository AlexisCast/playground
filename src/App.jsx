import { useState, useEffect } from "react";

import CardList from "./components/CardList";
import styles from "./App.module.css";

function App() {
	const [count, setCount] = useState(0);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		console.log("test");
		getRickMortyData();
	}, []);

	useEffect(() => {
		if (characters.length <= 0) {
			return;
		}
		console.log("test,,,", characters);
	}, [characters]);

	const getRickMortyData = async () => {
		const response = await fetch(
			"https://rickandmortyapi.com/api/character"
		);
		const data = await response.json();
		setCharacters(data.results);
	};

	return (
		<div className={styles.container}>
			<div className={styles.container__button}>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			{characters.length && <CardList characters={characters} />}
		</div>
	);
}

export default App;
