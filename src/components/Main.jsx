import styles from './Main.module.css';

const Main = () => {
	const picture = 'https://avatars.githubusercontent.com/u/123322146?v=4';

	return (
		<div className={styles.main}>
			<img className={styles.picture} src={picture} alt='Profile picture' />
			<h1 className={styles.title}>
				Hi there, I'm <span className={styles.name}>Rafael</span>
				<br></br>Front-end developer
			</h1>
			<p className={styles.content}>
				Starting out on my developer journey,<br></br>
				eager about learning and leveraging<br></br>
				technology to solve real world problems.
			</p>
		</div>
	);
};

export default Main;
