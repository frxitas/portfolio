import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full min-h-screen">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
