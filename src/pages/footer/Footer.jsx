import React from 'react'
import './footer.css'
import logo from '../../assets/logoat.png';
import { BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs";

function Footer() {
  return (
    <div className='footer-container'>  
        <img src={logo}></img>
        <div className='footer-icons'>
            <a target='_blank' href='https://www.instagram.com/jpbrites21/'><BsInstagram className='icon-footer'/></a>
            <a target='_blank' href='https://www.linkedin.com/in/jo%C3%A3o-paulo-b-689399119/'><BsLinkedin className='icon-footer'/></a>
            <a target='_blank' href='https://github.com/jpbrites'><BsGithub className='icon-footer'/></a>
        </div>
        <span>Copyright © 2023 | JP Studio | Todos os direitos reservados</span>

    </div>
  )
}

export default Footer