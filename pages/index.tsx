import type { NextPage } from "next";

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
			<Header />
			<Introduction />
			<Competencies />
			<Projects />
			<Footer />
		</>
	);
};

export default Home;
