import Card from "./Card";
import styles from "./CardList.module.css";

const CardList = ({ characters }) => {
	return (
		<section className={styles.container__card}>
			{characters.map((character, index) => (
				<Card character={character} key={index} />
			))}
		</section>
	);
};

export default CardList;
