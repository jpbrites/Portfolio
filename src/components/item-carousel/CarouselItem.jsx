import React from 'react'
import './carouselitem.css'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiDjango, SiPostgresql } from "react-icons/si";


function CarouselItem({ item, width }) {

  return (
    <div className="carousel-item" style={{ width: width }}>
        <div className='conj-moldura-projects'>
            <div></div>
            <img className="carousel-img" src={item.icon} /> 
        </div>
        <div className='conj-carousel' style={{display: 'flex', flexDirection: 'column'}}>
            <h1>{item.title}</h1>
            <div className="carousel-item-text">{item.description}</div>

            <div className='conj-technologies'>
                <span>Technologies used: </span>
                <div>
                    {item.tech.map((Icon, index) => {
                        return <Icon size={35} className='icon-tech'/>
                    })} 
                </div>
            </div> 
            <a href={item.link} target="_blank" className='button-link'>
  View on GitHub <FaGithub className='icon-git' size={22}/>
</a>
        </div>
  </div>
  )
}

export default CarouselItem