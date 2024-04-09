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
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiDjango, SiPostgresql, SiDart, SiFirebase, SiTypescript } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";


function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "PRPPG",
      description:
        "This is a project for a comprehensive system for managing the Research Pro-Rectorate of UNIVASF. The aim of this system is to register students and researchers/professors to organize the projects and calls for proposals that will be published, as well as the evaluations.",
      icon: projeto1,
      tech: [FaReact, FaHtml5, FaCss3Alt, IoLogoJavascript, FaNodeJs, GrMysql],
      link: 'https://github.com/jpbrites/PRPPG'
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
      description: "This project was one of the first ones I developed, and my goal with it was merely an introduction to my front-end skills. It's a 'Batman' website designed solely to promote the new movie. It features a main area, contacts, photos, and comments.",
      icon: projeto3,
      tech: [FaHtml5, FaCss3Alt],
      link: 'https://github.com/jpbrites/The-batman'
    },
    {
      title: "STARBUCKS",
      description:"This project was also one of the ones I developed early on in my learning journey in development. It's a very simple 'Starbucks' website featuring only the main screen displaying the product, description, and contact icons.",
      icon: projeto4,
      tech: [FaHtml5, FaCss3Alt],
      link: 'https://github.com/jpbrites/Stabucks'

    },
    {
      title: "NUCEU",
      description: "The NUCEU was a project for the Software Engineering course at the university, aiming to develop an application to manage the promotion of events and psychological counseling sessions at the Student Care Center, as well as to promote the center itself.",
      icon: projeto5,
      tech: [SiDart, RiFlutterFill, SiFirebase],
      link: 'https://github.com/jpbrites/Nuceu-App'

    },
    {
      title: "ESCOLA VERDE",
      description:"The 'Escola Verde - Mobile' was a project for the Thematic Core course at the university. It involved developing an application to promote the activities, events, news, and contacts of the Green School Project at my university.",
      icon: projeto6,
      tech: [SiDart, RiFlutterFill, FaWordpress],
      link: 'https://github.com/pcgomesp/escola_verde_mobile'

    },
    {
      title: "YOUTUBE",
      description:"In this project, I aimed to create a sort of 'replica' of YouTube, where I utilize the YouTube API for its development. Thus, it includes a main page loaded with currently trending videos, as well as search and login systems.",    
      icon: projeto7,
      tech: [FaHtml5, FaCss3Alt, SiTypescript, FaReact, FaNodeJs, GrMysql],
      link: 'https://github.com/jpbrites/youtube-project-front'

    },
    {
      title: "WHATSAPP",
      description:"In this project, I aimed to explore real-time system development using websockets. So, I created a kind of 'clone' of WhatsApp, where it's possible to chat in groups with several people and also have individual conversations.",
      icon: projeto8,
      tech: [FaHtml5, FaCss3Alt, IoLogoJavascript, FaReact, FaNodeJs],
      link: 'https://github.com/jpbrites/Whatsapp-front'

    },
    {
      title: "WEATHER",
      description:"This is a very simple weather project, where initially the user enters the name of the city they want to view. Then, a screen is displayed with the weather information and forecast for that particular city.",
      icon: projeto9,
      tech: [FaHtml5, FaCss3Alt,IoLogoJavascript, FaReact],
      link: 'https://github.com/jpbrites/Weather'

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