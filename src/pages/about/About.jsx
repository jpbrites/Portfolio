import React, {useState, useRef} from 'react'
import './about.css'
import people from '../../assets/eu_about.png';
import { Feature } from '../../components';
import { AiOutlineInstagram, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação só acontecerá uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade do elemento para ativar a animação
  });
  const [corIconeInsta, setCorIconeInsta] = useState('#00334D');
  const [corIconeWhats, setCorIconeWhats] = useState('#00334D');
  const [corIconeLink, setCorIconeLink] = useState('#00334D');
  const [corIconeGit, setCorIconeGit] = useState('#00334D');

  return (
    <div className='container-about'>
      <img loading='lazy' src={people}></img>
      <div ref={ref}  className={`content-about ${inView ? "animate" : ""}`}>
        <Feature cor={'#00334D'} titulo={'About Me'}/>
        <span className='content-about-name'>JOÃO PAULO - FULL STACK DEVELOPER</span>
        <p className='text-about'>I'm a 22-year-old web designer currently pursuing my undergraduate degree in Computer Engineering at the Universidade Federal do Vale do São Francisco (UNIVASF). With a strong passion for web design, my goal is to deliver exceptional digital solutions. Through my journey as a computer engineering student, I have acquired comprehensive skills in various technologies and programming languages, enabling me to create cohesive websites and applications. I strongly believe in the power of collaboration and understanding clients' unique requirements, which allows me to bring their visions to life through the art of web design. Combining attention to detail and a love for coding, I specialize in creating engaging websites, developing functional applications, and enhancing user experiences. Collaborating closely with clients, I transform their visions into reality. Let's embark on a digital journey together and bring your ideas to life.</p>
        <div class="icons">
          <a href="https://www.instagram.com/jpbrites21/" target="_blank" class="icon icon--instagram" onMouseEnter={() => setCorIconeInsta('white')} onMouseLeave={() => setCorIconeInsta('#00334D')}>
            <i class="ri-instagram-line"><AiOutlineInstagram id='icon-insta-res' color={corIconeInsta} size={33} /></i>
          </a>
          <a href="https://wa.me/5574999377588" target="_blank"  class="icon icon--whatsapp" onMouseEnter={() => setCorIconeWhats('white')} onMouseLeave={() => setCorIconeWhats('#00334D')}>
            <i class="ri-whatsapp-line"><BsWhatsapp id='icon-whats-res' color={corIconeWhats} size={27} /></i>
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-b-689399119/" target="_blank" class="icon icon--linkedin" onMouseEnter={() => setCorIconeLink('white')} onMouseLeave={() => setCorIconeLink('#00334D')}>
            <i class="ri-linkedin-line"><AiOutlineLinkedin id='icon-lin-res' color={corIconeLink} size={31} /></i>
          </a>
          <a href="https://github.com/jpbrites" target="_blank" class="icon icon--github" onMouseEnter={() => setCorIconeGit('white')} onMouseLeave={() => setCorIconeGit('#00334D')}>
            <i class="ri-github-line"><AiFillGithub id='icon-git-res' color={corIconeGit} size={33} /></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About