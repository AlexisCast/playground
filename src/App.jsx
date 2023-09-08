import { useState, useEffect } from "react";

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
			{characters.length && (
				<section className={styles.container__card}>
					{characters.map((character, index) => (
						<div className={styles.card} key={index}>
							<div>
								<img src={character.image} height="150px" />
							</div>
							<div className={styles.card__details}>
								<h2>{character.name}</h2>
								<h3>Status: {character.Status}</h3>
								<p>Species: {character.species}</p>
							</div>
						</div>
					))}
				</section>
			)}
		</div>
	);
}

export default App;
