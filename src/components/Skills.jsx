import styles from './Skills.module.css';
import LogoVS from '../assets/skills/vscode-original-wordmark.svg';
import LogoHTML from '../assets/skills/html5-plain-wordmark.svg';
import LogoCSS from '../assets/skills/css3-plain-wordmark.svg';
import LogoJS from '../assets/skills/javascript-plain.svg';
import LogoReact from '../assets/skills/react-original-wordmark.svg';

const Skills = () => {
	return (
		<div className={styles.ribbon} id='skills'>
			<img src={LogoVS} />
			<img src={LogoHTML} />
			<img src={LogoCSS} />
			<img src={LogoJS} />
			<img src={LogoReact} />
		</div>
	);
};

export default Skills;
