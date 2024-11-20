import React from 'react'
import '../styles/heading.css';
interface propstType{
    title: string;
}

const Heding: React.FC<propstType> = ({title}) => {
  return (
    <div className="heading-container">
     <p className="heading-title"> {title}</p> 
    </div>
  )
}

export default Heding
