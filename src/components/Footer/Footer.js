import React from 'react'
import '../../css/estilo.css';
//import './footer.css'
import WhatsAppWidget from '../WhatsAppWidget/WhatsAppWidget';
import InstagramWidget from '../InstagramWidget/InstagramWidget'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <h2>Contactanos!</h2>
        <ul className='footer-list'>
            <li className='footer-list-element'>
                <a className='footer-link' href="https://web.whatsapp.com/" target='is_blanc'><WhatsAppWidget/></a>
            </li>
            <li className='footer-list-element'>
                <a className='footer-link' href="https://www.instagram.com/" target='is_blanc'><InstagramWidget/></a>
            </li>
        </ul>

    </div>

    </>
  )
}

export default Footer