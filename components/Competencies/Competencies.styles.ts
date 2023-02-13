import styled from "@emotion/styled";

export const Competencies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 8rem 0px;
	border-radius: 10px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	/* box-shadow: 0px 0px 10px lightgrey; */
	/* border: 1px solid red; */
	border-radius: 10px;
`;

export const Title = styled.h2`
	padding: 0px 0px 22px 0px;
	color: var(--color-white);
`;

export const JS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0db4f;
	color: white;
	width: 100%;
	border-radius: 10px 10px 0px 0px;
	height: 60px;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: #f0db4f;
		height: 120px;
	}
`;

export const HTML = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	background-color: #f06529;
	height: 60px;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: #f06529;
		height: 120px;
	}
`;

export const CSS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	background-color: #3c99dc;
	height: 60px;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: #3c99dc;
		height: 120px;
	}
`;

export const TS = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	background-color: #007acc;
	height: 60px;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: #007acc;
		height: 120px;
	}
`;

export const REACT = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	background-color: #1c2c4c;
	height: 60px;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: #1c2c4c;
		height: 120px;
	}
`;

export const REDUX = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	width: 100%;
	background-color: #764abc;
	height: 60px;
	transition: all 300ms ease-in-out;
	border-radius: 0px 0px 10px 10px;

	:hover {
		background-color: #764abc;
		height: 120px;
	}
`;
