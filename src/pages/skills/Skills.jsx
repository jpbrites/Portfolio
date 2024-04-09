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
import { FaAngular } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";


import man from '../../assets/computer.png'

function Skills() {

  
  return (

<div className='containerr'>
<h1 className='title-skills'>My Skills</h1>
<div className='container-skills'>
<div class="card-wrap">
  <div class="card-header one">
    <AiOutlineHtml5 className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">HTML</h1>
 </div>
</div>
<div class="card-wrap">
  <div class="card-header two">
    <DiCss3 className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">CSS</h1>

 </div>
</div>
<div class="card-wrap">
  <div class="card-header three">
    <IoLogoJavascript className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">JavaScript</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header four">
    <DiReact className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">ReactJs</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header five">
    <FaAngular className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">Angular</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header six">
    <DiNodejsSmall className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">NodeJs</h1>
 </div>
</div>
<div class="card-wrap">
  <div class="card-header seven">
    <SiDart className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">Dart</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header eight">
    <BsFiletypeSql className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">SQL</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header nine">
    <BsGit className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">Git</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header ten">
    <FiFigma className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">Figma</h1>
   
 </div>
</div>
<div class="card-wrap">
  <div class="card-header eleven">
    <TbBrandThreejs className='icon-skill'/>
  </div>
  <div class="card-content">
    <h1 class="card-title">ThreeJs</h1>
   
 </div>
</div>
</div>
</div>



  )
}

export default Skills