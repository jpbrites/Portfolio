import React from 'react'
import './skillelement.css'

function SkillElement({ icon, name }) {
  const IconComponent = icon
    return (
    <div className="skill-element-container">
      <IconComponent size = {60} style = {{color: 'white'}}/>
      <span>{name}</span>
    </div>
  );
}

export default SkillElement