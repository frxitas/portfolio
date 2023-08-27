import { useEffect, useState } from "react";
import { api } from "../../services/gitHubApi";

interface IReposResponse {
  name: string;
  id: number;
  url: string;
}

export const Projects = () => {
  const [repos, setRepos] = useState<IReposResponse[]>([]);
  console.log(repos);

  const getRepos = async () => {
    try {
      const { data, status } = await api.get<IReposResponse[]>("/user/repos?visibility=public");
      if (status === 200) {
        const list: IReposResponse[] = [];

        data
          .filter((item) => item.name !== "portfolio")
          .map((repo) => {
            list.push({ ...repo });
          });

        setRepos(list);
      }
    } catch (error) { /* empty */ }
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen px-[15%] gap-10">
      <h2>Projects</h2>

      <div className="grid grid-cols-3 w-full h-full">
        {repos.map((repo) => (
          <div
            className="flex flex-col items-center justify-between w-[300px] h-[250px] pb-4 bg-white rounded-lg shadow-lg"
            key={repo.id}
          >
            <div className="w-full h-full">
              <img className="rounded-t-lg" src="https://placehold.co/600x400" />
            </div>
            <div>{repo.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
