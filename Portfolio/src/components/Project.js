import React from 'react';

const Project = ({ title, image, deployLink, repoLink }) => (
   <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
   </div>
);

export default Project;