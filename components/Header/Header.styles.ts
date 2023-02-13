import styled from "@emotion/styled";

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background: rgb(41, 53, 204);
	background: linear-gradient(
		90deg,
		rgba(41, 53, 204, 1) 0%,
		rgba(0, 109, 255, 1) 30%,
		rgba(0, 144, 255, 1) 60%,
		rgba(75, 179, 255, 1) 90%
	);
	position: fixed;
	z-index: 1100;
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
	height: 100%;
	color: white;
	/* border: 1px solid red; */
	padding: 0px 16px;
	/* border-radius: 0px 0px 6px 6px; */
`;

export const HeaderTitle = styled.div`
	font-size: 16px;
`;

export const HeaderRoutes = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

export const HeaderRoute = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeaderRouteText = styled.a`
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	color: white;
`;

export const HeaderLinks = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: fit-content;
	background-color: white;
	gap: 8px;
	padding: 6px;
	border-radius: 6px;
`;
