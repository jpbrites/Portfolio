import React, { useEffect, useState } from 'react'
import './projects.css'
import projeto1 from '../../assets/prppg.png'
import projeto2 from '../../assets/melograno.png'
import projeto3 from '../../assets/batman.png'
import projeto4 from '../../assets/starbucks.png'
import projeto5 from '../../assets/nuceu.png'
import projeto6 from '../../assets/escola-verde.png'
import projeto7 from '../../assets/youtube.png'
import projeto8 from '../../assets/whatsapp.png'
import projeto9 from '../../assets/weather.png'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import CarouselItem from '../../components/item-carousel/CarouselItem'
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiDjango, SiPostgresql } from "react-icons/si";


function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "PRPPG",
      description:
        "This is a project for a comprehensive system for managing the Research Pro-Rectorate of UNIVASF. The aim of this system is to register students and researchers/professors to organize the projects and calls for proposals that will be published, as well as the evaluations.",
      icon: projeto1,
      tech: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript, FaNodeJs, GrMysql],
    },
    {
      title: "MELOGRANO",
      description:
        "A college project that simulates a food delivery system. This was a software developed for the Distributed Systems discipline and aims to provide some functionalities that other systems of the same type bring. For example: Registration of different types of users, product purchase, product registration, among others.",
      icon: projeto2,
      tech: [SiDjango, FaPython, FaHtml5, FaCss3Alt, IoLogoJavascript, SiPostgresql],
      link: 'https://github.com/rodrigo-barboza/melograno'

    },
    {
      title: "THE BATMAN",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto3,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "STARBUCKS",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto4,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "NUCEU",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto5,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "ESCOLA VERDE",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto6,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "YOUTUBE",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto7,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "WHATSAPP",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto8,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
    {
      title: "WEATHER",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: projeto9,
      tech: [FaHtml5, FaCss3Alt, FaReact]
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    /*
    <div className='projects-container'>
        <div className='conj-title-projects'>
          <span>My Projects</span>
          <div></div>
        </div>
        <div className='projects-area'>
            <ProjectCard title={'PRPPG'} description={'A project management system for the Office of Research of UNIVASF'} imgUrl={projeto1} link={'https://github.com/jpbrites/PRPPG'}/>
            <ProjectCard title={'WHATSAPP'} description={'A personal project that involves creating a basic copy of Whatsapp'} imgUrl={projeto8} link={'https://github.com/jpbrites/Whatsapp-front'}/>
            <ProjectCard title={'YOUTUBE'} description={'A personal project that involves creating a basic copy of YouTube'} imgUrl={projeto7} link={'https://github.com/jpbrites/youtube-project-front'}/>
            <ProjectCard title={'MELOGRANO'} description={'A college project that simulates a food delivery system'} imgUrl={projeto2} link={'https://github.com/rodrigo-barboza/melograno'}/>
            <ProjectCard title={'WEATHER'} description={'A project that displays the weather and forecast for a city using the WeatherAPI'} imgUrl={projeto9} link={'https://github.com/jpbrites/Weather'}/>
            <ProjectCard title={'THE BATMAN'} description={'Just a personal project to practice front-end development'} imgUrl={projeto3} link={'https://github.com/jpbrites/The-batman'}/>
            <ProjectCard title={'STARBUCKS'} description={'Just a personal project to practice front-end development'} imgUrl={projeto4} link={'https://github.com/jpbrites/Stabucks'}/>
            <ProjectCard title={'NUCEU'} description={'NUCEU`s event management application'} imgUrl={projeto5} link={'https://github.com/jpbrites/Nuceu-App'}/>
            <ProjectCard title={'ESCOLA VERDE'} description={'Green School`s event and activity management application'} imgUrl={projeto6} link={'https://github.com/pcgomesp/escola_verde_mobile'}/>
        </div>
        <span className='projects-gratitude'>*I would like to express my sincere gratitude to Paulo César, Rodrigo Leandro, Francisco Luan, Eduardo de Oliveira, and Aurélio Ribeiro for their valuable contributions to the projects: 'Melograno,' 'Nuceu,' and 'Escola Verde'. Working alongside such talented individuals has been an inspiring and rewarding experience, and I am truly thankful for their involvement in making these projects successful.</span>
    </div>
    */
    <div className="carousel">
      <div className='conj-projects-title'>
        <span className='title-projects'>My Projects</span>
        <div className='bar-projects'></div>
      </div>
    
    <div
      className="inner"
      style={{ transform: `translate(-${activeIndex * 100}%)`
   }}
    >
      {items.map((item) => {
        return <CarouselItem item={item} width={"100%"} />;
      })}
    </div>

    <div className="carousel-buttons">
      <GrPrevious
        className="button-arrow left"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      />
      <div className="indicators">
        {items.map((item, index) => {
          return (
            <MdOutlineRadioButtonChecked
            className={`material-symbols-outlined ${
              index === activeIndex
                ? "indicator-symbol-active"
                : "indicator-symbol"
            } indicator-buttons` } 
              onClick={() => {
                updateIndex(index);
              }}
            >
        
            </MdOutlineRadioButtonChecked>
          );
        })}
      </div>
      <GrNext
        className="button-arrow right"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      />
      
    </div>
  </div>
  )
}

export default Projects