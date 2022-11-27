import styled from "@emotion/styled"

export const Header = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: var(--color-primary-700);
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 65%;
  height: 100%;
	color: white;
  border-radius: 0px 0px 6px 6px;
`;

export const HeaderTitle = styled.div`
	font-size: 16px;
`

export const HeaderLinks = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: fit-content;
	background-color: white;
	gap: 8px;
	padding: 6px;
	border-radius: 6px;
`