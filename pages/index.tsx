import type { NextPage } from "next";
import Head from "next/head";

/** COMPONENTS */
import { Competencies } from "../components/Competencies";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
/** END COMPONENTS */

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Portfolio | By Guilherme Freitas</title>
			</Head>
			<Header />
			<Introduction />
			<Competencies />
			<Projects />
			<Footer />
		</>
	);
};

export default Home;
