import React from 'react'
import './skills.css'
import { SkillElement } from '../../components'
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejsSmall } from "react-icons/di";
import { BsFiletypeSql, BsGit } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";


function Skills() {

  
  return (
    <>
    <div class = "skills">
      <div class = "title-skills">
        <span>My Skills</span>
        <div></div>
      </div>
      <div className='skill-area'>
        <SkillElement icon={AiOutlineHtml5} name={'HTML'}/>
        <SkillElement icon={DiCss3} name={'CSS'}/>
        <SkillElement icon={IoLogoJavascript} name={'Javascript'}/>
        <SkillElement icon={DiReact} name={'ReactJs'}/>
        <SkillElement icon={DiNodejsSmall} name={'NodeJs'}/>
        <SkillElement icon={RiFlutterFill} name={'Flutter'}/>
        <SkillElement icon={BsFiletypeSql} name={'SQL'}/>
        <SkillElement icon={FaPhp} name={'PHP'}/>
        <SkillElement icon={BsGit} name={'Git'}/>
        <SkillElement icon={FiFigma} name={'Figma'}/>
      </div>
    </div>
    
    </>
  )
}

export default Skills