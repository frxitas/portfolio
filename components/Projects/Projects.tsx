import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "../Container";

import * as Styles from "./Projects.styles";

interface IProjects {
	name: string;
	url: string;
	language: string;
}

const Projects = () => {
	const [projectsList, setProjectsList] = useState<IProjects[]>([]);

	const FetchProjects = async () => {
		try {
			const { data, status } = await axios.get(
				`https://api.github.com/users/frxitas/repos`,
				{
					headers: {
						Authorization: "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",
						Accept: "application/vnd.github+json",
					},
				},
			);

			if (status == 200) {
				let arr: IProjects[] = [];
				data
					.filter((item: any) => item.name !== "portfolio")
					.map((project: any) => {
						arr.push({
							name: project.name,
							url: project.url,
							language: project.language,
						});
					});
				setProjectsList(arr);
			}
		} catch (error) {}
	};

	useEffect(() => {
		FetchProjects();
	}, []);

	const list = [
		{ title: "To do" },
		{ title: "Sorteador de amigo secreto" },
		{ title: "Social" },
		{ title: "Nasa photos" },
	];

	return (
		<Styles.Projects>
			<Styles.ProjectsTitle>Projects</Styles.ProjectsTitle>
			<Styles.Content>
				<Styles.ProjectList>
					{projectsList.map((item: IProjects) => (
						<Styles.ProjectCard key={item.name}>{item.name}</Styles.ProjectCard>
					))}
				</Styles.ProjectList>
			</Styles.Content>
		</Styles.Projects>
	);
};

export default Projects;
