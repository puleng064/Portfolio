import React, { useState } from 'react';

const skillsData = [
  { id: 'software-development', title: 'Intro to Software Development', description: 'Foundational principles of software development and programming concepts.' },
  { id: 'java', title: 'Java Programming', description: 'Proficient in Java for building robust applications and software solutions.' },
  { id: 'web-development', title: 'Intro to Web Development', description: 'Learned HTML, CSS, and JavaScript for building interactive web applications.' },
  { id: 'react-basics', title: 'React Basics', description: 'Understanding core concepts of React for building user interfaces.' },
  { id: 'databases', title: 'Intro to Databases', description: 'Basic knowledge of database management and back-end integration.' },
  { id: 'data-capturing', title: 'Data Service Associate', description: 'Expertise in data capture techniques for accurate data collection and analysis.' },
  { id: 'icdl', title: 'ICDL Certification', description: 'Certified in Information Technology to enhance digital skills and efficiency.' },
];

const Skills = () => {
  const [visible, setVisible] = useState(null);

  return (
    <section id="skills">
      <h5>Technical Skills & Certifications</h5>
      <div className="skills-list">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill" onClick={() => setVisible(visible === skill.id ? null : skill.id)}>
            <h6>{skill.title}</h6>
            {visible === skill.id && <p>{skill.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
