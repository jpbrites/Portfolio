import React from 'react'
import './projectcard.css'
import { HiOutlineExternalLink } from 'react-icons/hi';

function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <div className='project-card'>
        <img src={imgUrl} className='project-image'></img>
        <div className='project-modal'>
            <span className='project-subtitle'>{title}</span>
            <h2 className='project-title'>{description}</h2>
            <a href={link} target='_blank' className='project-button'>View on GitHub <HiOutlineExternalLink className='project-icon' size={19}/></a>
        </div>
    </div>
  )
}

export default ProjectCard