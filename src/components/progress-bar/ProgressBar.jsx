import React from 'react'
import './progressbar.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function ProgressBar({ skill, progress, color }) {
    return (
    <div className="skill-progress-container">
     <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        strokeWidth={8}
        className="skill-progress"
        styles={buildStyles({
            textColor: 'white',
            pathColor: color,
            trailColor: '#e6e6e6',
            strokeLinecap: 'round',
          })}
      />
      <span className='name-skill'>{skill}</span>
  </div>
  );
}

export default ProgressBar