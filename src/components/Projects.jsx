import Card from './Card';
import styles from './Projects.module.css';
import ProjectData from '/ProjectData.json';

const Projects = () => {
	return (
		<div className={styles.wrapper} id='projects'>
			{ProjectData &&
				//checks if ProjectData is null
				ProjectData.map((projects, index) => (
					<Card
						key={index}
						name={projects.name}
						description={projects.description}
						preview={projects.preview}
						source={projects.source}
					/>
				))}
		</div>
	);
};

export default Projects;
