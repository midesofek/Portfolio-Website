import Button from "@/components/Button";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header";
import projects from "@/data/projectsData";
import Link from "next/link";
// import { useState } from "react";

// const [projectsData, ] = useState([])

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="max-w-lg min-w-24 rounded-xl overflow-hidden shadow-lg bg-white border cursor-pointer transition duration-300 hover:shadow-2xl hover:border-slate-300">
          {/* <img className="w-full" src={imageUrl} alt={title} /> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
          <Link
            href={link}
            className="text-brand-blue hover:text-brand-blue-dark font-semibold text-sm"
          >
            View project
          </Link>
        </div> */}
        </div>
      </a>
    </>
  );
}

function Projects() {
  return (
    <>
      <Header />
      <div className=" px-4 py-6 flex justify-center items-center">
        <div className="flex flex-col justify-center space-y-4 items-center">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.projectName}
                description={project.projectDescription}
                imageUrl={project.image}
                link={project.url}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
