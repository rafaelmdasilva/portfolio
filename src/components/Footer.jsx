import styles from './Footer.module.css';
import githubLogo from '../assets/footer/github-mark-white.png';
import linkedinLogo from '../assets/footer/In-White-128.png';
import emailIcon from '../assets/footer/envelope-open-svgrepo-com.svg';
import whatsappLogo from '../assets/footer/whatsapp-color-svgrepo-com.svg';

const Footer = () => {
	const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK;
	const githubLink = import.meta.env.VITE_GITHUB_LINK;
	const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
	const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

	return (
		<div className={styles.footer}>
			<div className={styles.socials}>
				<a href={linkedinLink} target='_blank'>
					<img src={linkedinLogo} alt='LinkedIn logo' />
				</a>
				<a href={githubLink} target='_blank'>
					<img src={githubLogo} alt='GitHub logo' />
				</a>
				<a href={emailAddress} target='_blank'>
					<img src={emailIcon} alt='Email logo' />
				</a>
				<a href={whatsappNumber} target='_blank'>
					<img src={whatsappLogo} alt='WhatsApp logo' />
				</a>
			</div>
			<div className={styles.copyright}>
				<span>Copyright © 2024 Rafael M. da Silva.</span>
				<span>
					This work is licensed under a&nbsp;
					<a href='http://www.gnu.org/licenses/gpl-3.0.en.html' target='_blank'>
						GNU General Public License v3.0.
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
