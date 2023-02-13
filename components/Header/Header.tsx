import React, { FC } from "react";
import { GithubLogo } from "../LinkIcons/githubLogo";
import { LinkedinLogo } from "../LinkIcons/linkedinLogo";

import * as Styles from "./Header.styles";

const Header: FC = () => {
	const routes = [
		{ id: 1, title: "About me", link: "/about" },
		{ id: 2, title: "Contact", link: "/contact" },
	];

	return (
		<Styles.Header>
			<Styles.HeaderContent>
				<Styles.HeaderTitle>Hello World</Styles.HeaderTitle>
				{routes.map((item) => (
					<Styles.HeaderRoutes key={item.id}>
						<Styles.HeaderRouteText href={item.link}>{item.title}</Styles.HeaderRouteText>
					</Styles.HeaderRoutes>
				))}
				<Styles.HeaderLinks>
					<a href="https://www.linkedin.com/in/freitas014/">
						<LinkedinLogo />
					</a>
					<a href="https://github.com/frxitas">
						<GithubLogo />
					</a>
				</Styles.HeaderLinks>
			</Styles.HeaderContent>
		</Styles.Header>
	);
};

export default Header;
