import axios from "axios";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

import Avatar from "../../assets/WhatsApp Image 2022-12-28 at 10.58.54 PM.png";

import * as Styles from "./Introduction.styles";

const Introduction: FC = () => {
	const [useInfo, setUserInfo] = useState({ name: "" });

	const FetchUser = async () => {
		const response = await axios.get(`https://api.github.com/users/frxitas`, {
			headers: {
				Authorization: "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",
				Accept: "application/vnd.github+json",
			},
		});

		setUserInfo(response.data);
	};

	// useEffect(() => {
	// 	FetchUser();
	// }, [])

	return (
		<Styles.Introduction>
			<Styles.IntroductionWrapper>
				<Styles.IntroductionContent>
					<Styles.IntroductionHeading>
						<Styles.IntroductionTitle>
							{/* {useInfo.name} */}
							{"Guilherme Freitas"}
						</Styles.IntroductionTitle>
						<Styles.IntroductionSubTitle>
							{"Front-end Developer"}
						</Styles.IntroductionSubTitle>
						<Styles.IntroductionDescription>
							Hi, welcome to my portfolio
						</Styles.IntroductionDescription>
					</Styles.IntroductionHeading>
				</Styles.IntroductionContent>
				<Styles.Square>
					<Image src={Avatar} alt="Avatar"/>
				</Styles.Square>
			</Styles.IntroductionWrapper>
		</Styles.Introduction>
	);
};

export default Introduction;
