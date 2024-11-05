import React from 'react';

const Resume = () => (
   <section>
      <h2>Resume</h2>

      {/* Link to Download Resume */}
      <p>
         Download my resume:
         <a 
            href="/path-to-your-resume.pdf" 
            download 
            target="_blank" 
            rel="noopener noreferrer"
         >
            Download PDF
         </a>
      </p>

      {/* List of Proficiencies */}
      <h3>Proficiencies</h3>
      <ul>
         <li>JavaScript</li>
         <li>React</li>
         <li>HTML & CSS</li>
         <li>Node.js</li>
         <li>Express</li>
         <li>MongoDB</li>
         <li>SQL</li>
         <li>Git & Version Control</li>
         {/* Add more skills as needed */}
      </ul>
   </section>
);

export default Resume;