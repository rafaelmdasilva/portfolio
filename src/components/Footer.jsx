import styles from './Footer.module.css';
import githubLogo from '../assets/footer/github-mark-white.png';
import linkedinLogo from '../assets/footer/In-White-128.png';
import emailLogo from '../assets/footer/envelope-open-svgrepo-com.svg';

const Footer = () => {
	const linkedinLink = 'https://www.linkedin.com/in/rafaelmdasilva451';
	const githubLink = 'https://github.com/rafaelmdasilva';
	const email = 'mailto:rafaelmsilva451@outlook.com';
	const gpl = 'http://www.gnu.org/licenses/gpl-3.0.en.html';

	return (
		<div className={styles.footer}>
			<div className={styles.socials}>
				<a href={linkedinLink} target='_blank'>
					<img src={linkedinLogo} alt='LinkedIn logo' />
				</a>
				<a href={githubLink} target='_blank'>
					<img src={githubLogo} alt='GitHub logo' />
				</a>
				<a href={email} target='_blank'>
					<img src={emailLogo} alt='Email logo' />
				</a>
			</div>
			<div className={styles.copyright}>
				<span>Copyright © 2024 Rafael M. da Silva.</span>
				<span>
					This work is licensed under a&nbsp;
					<a href={gpl} target='_blank'>
						GNU General Public License v3.0.
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
