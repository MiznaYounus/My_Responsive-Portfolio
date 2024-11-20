import React from 'react'
import "../styles/skills.css";
const Skills = () => {
  return (
    <div  id="skills" className="skills-container">
      <div className="skills-grid">

        <div data-aos="zoom-in-up" className="skills-left">
           <h2 className="skills-heading">Technologies I Work With</h2> 
           <p className="skills-text">
            I have a strong base on HTML,CSS ,Typescript.
           </p>
        
        </div>
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
         </div>
          <div  className="skills-space">
          <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>



          </div>
        

        
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills

