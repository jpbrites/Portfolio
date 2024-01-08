import React from 'react'
import { ProjectCard } from '../../components'
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

function Projects() {
  return (
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
  )
}

export default Projects