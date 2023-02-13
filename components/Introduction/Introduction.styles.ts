import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Introduction = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: rgb(41, 53, 204);
	background: linear-gradient(
		90deg,
		rgba(41, 53, 204, 1) 0%,
		rgba(0, 109, 255, 1) 30%,
		rgba(0, 144, 255, 1) 60%,
		rgba(75, 179, 255, 1) 90%
	);
`;

export const IntroductionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	height: 90%;
	padding: 16px;
	margin: 10px 0px;
`;

export const IntroductionContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const IntroductionHeading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 16px;
	height: 100%;
	width: 350px;
	padding: 90px 0px 0px 0px;
`;

export const IntroductionTitle = styled.h1`
	font-size: 32px;
	color: var(--color-primary-300);
	margin: 0;
`;

export const IntroductionSubTitle = styled.h2`
	font-size: 26px;
	color: var(--color-white);
`;

export const IntroductionDescription = styled.div`
	/* width: 350px;
	height: 200px; */
	display: flex;
	justify-content: left;
	font-size: 16px;
	color: var(--color-white);
`;

const shapeAnimation = keyframes`
	0% {
		transform: scale(0.5);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 100%
	}
`;

export const Square = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	width: 400px;
	height: 430px;
	background-color: white;
	border-radius: 54% 46% 60% 40% / 50% 52% 48% 50%;
	animation: ${shapeAnimation} 1s ease-in-out 0s 1 normal forwards;
`;
