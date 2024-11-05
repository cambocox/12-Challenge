import React from 'react';
import Project from '../components/Project';
import projectData from '../assets/projectData'; // Array of project info

const Portfolio = () => (
   <section>
      <h2>Portfolio</h2>
      <div className="projects">
         {projectData.map((project, index) => (
            <Project key={index} {...project} />
         ))}
      </div>
   </section>
);

export default Portfolio;