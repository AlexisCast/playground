import styles from "./Card.module.css";

const Card = ({ character }) => {
	return (
		<div className={styles.card}>
			<div>
				<img src={character.image} height="150px" />
			</div>
			<div className={styles.card__details}>
				<h2>{character.name}</h2>
				<h3>Status: {character.Status}</h3>
				<p>Species: {character.species}</p>
			</div>
		</div>
	);
};

export default Card;
