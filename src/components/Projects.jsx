import Card from './Card';
import styles from './Projects.module.css';
import { useState, useEffect } from 'react';

const Projects = () => {
	const [parsed, setParsed] = useState(null);

	useEffect(() => {
		// fetch('../public/ProjectData.json')
		fetch('./ProjectData.json')
			//makes the file available during runtime by using the public folder

			.then((response) => response.json())
			.then((data) => setParsed(data));
	}, []);
	//useEffect with an empty array ensures it only runs once, as the component mounts

	return (
		<div className={styles.wrapper} id='projects'>
			{parsed &&
				//checks if parsed is null
				parsed.map((projects, index) => (
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
