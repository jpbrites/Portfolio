import React, {useState} from 'react'
import foto from '../../assets/foto-contact2.png';
import './contact.css'
import emailjs from 'emailjs-com';
import { BsCheck2 } from "react-icons/bs";

function Contact() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Configuração do serviço EmailJS
        const serviceID = 'service_5adcwgh'; // Substitua pelo ID do seu serviço EmailJS
        const templateID = 'template_o5rvrkd'; // Substitua pelo ID do seu template de email
        const userID = '7QwiUhG75GWEknOcj'; // Substitua pelo seu User ID do EmailJS
    
        const templateParams = {
          name: name,
          email: email,
          message: message,
        };
    
        emailjs.send(serviceID, templateID, templateParams, userID)
          .then((response) => {
            console.log('Email enviado com sucesso!', response);
            setName(' ')
            setEmail(' ')
            setMessage(' ')
            setIsModalOpen(true);

          })
          .catch((error) => {
            console.error('Erro ao enviar o email:', error);
         
          });
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <div className='contact-container'>
        <div className='contact-form-container'>
            <h1>Contact me</h1>
            <form onSubmit={handleSubmit} className='contact-form'>
            <div className='name-email-container'>
                <div className='conj-form'>
                    <label>Name</label>
                    <input placeholder='Enter your name' type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className='conj-form'>
                    <label>Email</label>
                    <input placeholder='Enter your email' type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
            </div>
            <div className='conj-form'>
                <label>Message</label>
                <textarea placeholder='Enter your message' className='input-message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button className='contact-button' type="submit">Enviar</button>
            </form>
        </div>
        <div className="image-container">
            <img src={foto} alt="Foto" />
        </div>
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className='conj-accept'>
              <BsCheck2 style={{color: 'white'}} size={27}/>
            </div>
            <h2>E-mail enviado com sucesso!</h2>
            <button onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Contact