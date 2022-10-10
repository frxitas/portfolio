import styled from "@emotion/styled";

export const Introduction = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: calc(100vh - 60px);
	background-color: white;
`;

// const titleAnimation = keyframes 

export const IntroductionContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	height: 70%;
	padding: 20px;
	margin: 10px 0px;
	box-shadow: 0px 0px 10px lightgrey;
	border-radius: 10px;
`;

export const IntroductionHeading = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	width: 350px;
	padding: 30px 0px;
`;

export const IntroductionTitle = styled.h1`
	font-size: 32px;
	color: var(--color-primary-700);
	margin: 0;
`;

export const IntroductionSubTitle = styled.h2`
	font-size: 26px;
	color: var(--color-black);
`;

export const IntroductionImage = styled.div`
	width: 100px;
	height: 100px;
`;
