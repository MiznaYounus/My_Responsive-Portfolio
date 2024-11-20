import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../styles/projects.css'
const data =[
    {
        id:0,
        title:"Static Interactive Resume",
        desc:"based on html,css",
        img:"/milestone 01.PNG",
        tags:["CSS","Typescript"],
    }, 

 

{
        id:1,
        title:"Todo List",
        desc:"A React & Typescript based app for managing and ",
        img:"/pi.PNG",
        tags:["React","Node","CSS","Typescript"],
},



];
const project = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid  projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center" >
        {data.map((el) => (
          <Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  );
};

export default project;
