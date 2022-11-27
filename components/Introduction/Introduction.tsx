import axios from "axios";
import React, { FC, useEffect, useState } from "react";

import * as Styles from "./Introduction.styles";

const Introduction: FC = () => {
	const [useInfo, setUserInfo] = useState({name: ''})

	const FetchUser = async () => {
		const response = await axios.get(`https://api.github.com/users/frxitas`, {
			headers: {
				Authorization: "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",
				Accept: "application/vnd.github+json",
			},
		});

		setUserInfo(response.data);
	};

	useEffect(() => {
		FetchUser();
	}, [])

	return (
		<Styles.Introduction>
			<Styles.IntroductionContent>
				<Styles.IntroductionHeading>
					<Styles.IntroductionTitle>
						{useInfo.name}
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
