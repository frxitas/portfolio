import React, { useState } from "react";

import { Container } from "../Container";

import * as Styles from "./Competencies.styles";

const Competencies = () => {
	return (
		// <Container>
			<Styles.Competencies>
				<Styles.Title>Hard skills</Styles.Title>
				<Styles.Content>
					<Styles.JS>JS</Styles.JS>
					<Styles.TS>TS</Styles.TS>
					<Styles.HTML>HTML</Styles.HTML>
					<Styles.CSS>CSS</Styles.CSS>
					<Styles.REACT>REACT</Styles.REACT>
					<Styles.REDUX>REDUX</Styles.REDUX>
				</Styles.Content>
			</Styles.Competencies>
		// </Container>
	);
};

export default Competencies;
