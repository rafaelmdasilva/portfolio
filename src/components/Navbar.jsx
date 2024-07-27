import styles from './Navbar.module.css';
import logo from '../assets/navbar/logo.png';

const Navbar = () => {
	const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK;

	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img src={logo} alt='Website logo' />
			</div>
			<div className={styles.navigation}>
				<a href='#'>Home</a>
				<a href='#skills'>Skills</a>
				<a href='#projects'>Projects</a>
			</div>
			<div className={styles.connect}>
				<a href={linkedinLink} target='_blank'>
					Connect
				</a>
			</div>
		</div>
	);
};

export default Navbar;
