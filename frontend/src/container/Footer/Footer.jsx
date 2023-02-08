import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wraapper';
import { client } from '../../client';
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">nasouhe@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+963 934 518 476</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className='app__social2'>
        <a href='https://www.linkedin.com/in/nasouh-alsamman/' target="_blank" ><div>
            <AiFillLinkedin />
        </div>
        </a>
        <a href='https://github.com/Nasouh-Alsamman' target="_blank" ><div>
            <AiFillGithub />
        </div>
        </a>
        <a href='https://www.facebook.com/nasouh.alsamman/' target="_blank" ><div>
            <FaFacebookF />
        </div>
        </a>  
        <a href='https://www.instagram.com/nasouh.alsamman/' target="_blank" ><div>
            <BsInstagram />
        </div>
        </a>
        
       
    </div>
          <div className="copyright">
            <p className="p-text">@2023 Nasouh-Alsamman</p>
            <p className="p-text">All rights reserved</p>
          </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__promarybg',
);