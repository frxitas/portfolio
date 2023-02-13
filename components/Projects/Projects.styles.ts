import styled from "@emotion/styled";

export const Projects = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin: 8rem 0px;
	padding: 4rem 0;
`;

export const ProjectsTitle = styled.h2`
	padding: 0px 0px 22px 0px;
	color: var(--color-white);
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 100%;
	/* box-shadow: 0px 0px 8px lightgrey; */
	border-radius: 10px;
`;

export const ProjectList = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	/* border: 1px solid red; */
	padding: 16px 0px;
	grid-template-columns: repeat(2, 50%);
	border: 1px;
	grid-column-gap: 48px;
	grid-row-gap: 48px;
	width: 100%;
	height: 100%;
`;

export const ProjectCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 300px;
	border-radius: 10px;
	color: black;
	background-color: var(--color-white);
	border: 1px solid blue;
`;

export const ProjectItemTitle = styled.h2`
	display: flex;
`;

export const ProjectItemHeader = styled.div``;

export const ProjectItemBody = styled.div``;

export const ProjectItemFooter = styled.div``;
