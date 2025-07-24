import ProjectCard from "../../components/ProjectCard";
import Amazon from "../../assets/Projects/Screenshot 2025-07-24 192534.png"
import typer from "../../assets/Projects/Screenshot 2025-07-24 192331.png"
import Wrapper from "../../components/Wrapper";

function Projects() {
  return (
    <section id="projects" className="mx-[200px] dark:text-white">
      <h1 className="text-4xl text-center font-bold font-stardom m-12">RECENT PROJECTS</h1>
      <div className="border-b-2 border-zinc-600">
        <ProjectCard src={Amazon} link="https://github.com/dashboard" title="Amazon Clone" tags={["react", "CSS", "Typescript"]}/>
        <ProjectCard src={typer} link="https://github.com/dashboard" title="Type Test" tags={["react", "CSS", "Typescript"]}/>
      </div>
    </section>
  );
}

export default Projects;
