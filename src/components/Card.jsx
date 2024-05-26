import styles from './Card.module.css';

const Card = (props) => {
	return (
		<div className={styles.card}>
			<a href={props.source} target='_blank'>
				<img className={styles.preview} src={props.preview} alt='Preview image' />
			</a>
			<h2 className={styles.title}>{props.name}</h2>
			<p className={styles.description}>{props.description}</p>
		</div>
	);
};

export default Card;
