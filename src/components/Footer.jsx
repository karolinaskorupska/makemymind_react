import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//obrazy
import LinkedIn from '../assets/Linked_Icon.svg';
import Instagram from '../assets/Instagram_Icon.svg';
import Facebook from '../assets/Facebook_Icon.svg';
import Twitter from '../assets/Twitter_Icon.svg';
import PhoneIcon from '../assets/np_phone_2828705_9B9B9B.svg';
import EmailIcon from '../assets/np_mail_933334_9B9B9B.svg';


const Footer = () => {
    return( 
        <footer>    
        <div className="footer">
            
            <div className="left">
                Masz pytania?<br></br> Skontaktuj się z naszym konsultantem!
                <div className="tel"><img src={PhoneIcon} alt="phoneIcon"></img>+48 000 000 000</div>
                <div className="mail"><img src={EmailIcon} alt="EmailIcon"></img>kontakt@makemymind.pl</div>
                <div className="icons">
                    <Link to="https://www.linkedin.com/company/make-my-mind/"><img src={LinkedIn} alt="linkedin"></img></Link>
                    <Link to="https://www.facebook.com/makemymindpl/"><img src={Facebook} alt="Facebook"></img></Link>
                    <Link to="#"><img src={Twitter} alt="Twitter"></img></Link>
                    <Link to="https://www.instagram.com/make_my_mind/"><img src={Instagram} alt="Instagram"></img></Link>
                </div>
            </div>    
            <div className="middle">
                Make my mind sp. z o. o. <br></br> KRS: 0000677255, NIP:7451847771, <br></br> REGON: 366168664 <br></br> ul. Fredry 2/5a <br></br> 61-701 Poznań, Polska
            </div>
            <div className="right">
                Fitness dla umysłu
                <nav className="nav-small">
                    <table>
                        <tbody>
                            <tr>
                                <td><NavLink exact to="index" title="o nas" target="_blank">o nas</NavLink></td>
                                <td><NavLink exact to="trainers" title="trenerzy" target="_blank">trenerzy</NavLink></td>
                            </tr>
                            <tr>
                                <td><NavLink exact to="http" title="o projekcie" target="_blank">o projekcie</NavLink></td>
                                <td><NavLink exact to="contact" title="kontakt" target="_blank">kontakt</NavLink></td>
                            </tr>
                            <tr>
                                <td><NavLink exact to="trainings" title="uslugi" target="_blank">usługi</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            </div>
        </div>
        <div className="copyrights">
            Copyrights @ Make my mind 2019
        </div>
</footer>
    )
}

export default Footer;