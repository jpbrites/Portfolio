import React from 'react'
import './skills.css'
import { ProgressBar } from '../../components'

function Skills() {

  
  return (
    <>
    <div class = "skills">
      <div class = "title-skills">
        <span>My Skills</span>
        <div></div>
      </div>
      <div className='skill-bars'>
        <ProgressBar skill={'HTML5'} progress={90} color={'#E5532D'}/>  
        <ProgressBar skill={'CSS3'} progress={85} color={'#0870c2'}/>  
        <ProgressBar skill={'Javascript'} progress={70} color={'#f7e025'}/>  
        <ProgressBar skill={'ReactJs'} progress={70} color={'#08ddff'}/>  
        <ProgressBar skill={'NodeJs'} progress={60} color={'#94c745'}/>  
        <ProgressBar skill={'Flutter'} progress={50} color={'#0b5d9f'}/>
        <ProgressBar skill={'SQL'} progress={65} color={'#dc7939'}/> 
        <ProgressBar skill={'PHP'} progress={30} color={'#7b7fb5'}/> 
        <ProgressBar skill={'Git'} progress={80} color={'#f15639'}/> 
        <ProgressBar skill={'Figma'} progress={85} color={'#a55eff'}/> 
      </div>
    </div>
    
    </>
  )
}

export default Skills