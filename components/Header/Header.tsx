import React, { FC } from "react";
import { GithubLogo } from "../LinkIcons/githubLogo";
import { LinkedinLogo } from "../LinkIcons/linkedinLogo";

import * as Styles from "./Header.styles";

const Header: FC = () => {
	return (
		<Styles.Header>
			<Styles.HeaderContent>
				<Styles.HeaderTitle>
					Hello World
				</Styles.HeaderTitle>
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
