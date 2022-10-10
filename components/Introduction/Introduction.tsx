import React, { FC } from "react";

import * as Styles from "./Introduction.styles";

const Introduction: FC = () => {
	return (
		<Styles.Introduction>
			<Styles.IntroductionContent>
				<Styles.IntroductionHeading>
					<Styles.IntroductionTitle>
						{"Guilherme Freitas"}
					</Styles.IntroductionTitle>
					<Styles.IntroductionSubTitle>
						{"Front-end Developer"}
					</Styles.IntroductionSubTitle>
				</Styles.IntroductionHeading>
			</Styles.IntroductionContent>
		</Styles.Introduction>
	);
};

export default Introduction;
