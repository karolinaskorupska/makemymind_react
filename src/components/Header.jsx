import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//obrazy
import Logo from '../assets/Header_logo_MMM.svg';
import LinkedInDark from '../assets/Linked_Icon_dark.svg';
import InstagramDark from '../assets/Instagram_Icon_dark.svg';
import FacebookDark from '../assets/Facebook_Icon_dark.svg';
import TwitterDark from '../assets/Twitter_Icon_dark.svg';
import { Component } from 'react';



class Header extends Component{
    state={
        hamburgerIsOpen:false,
    }

    handleHamburgerMenu=()=>{
        this.setState({
            hamburgerIsOpen:!this.state.hamburgerIsOpen,
        });
    }

    render(){
        const {hamburgerIsOpen}=this.state;

        return(
    
            <header
            className={hamburgerIsOpen ? "hamburger-menu-on" : ""}
            >
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                    <button className="cross visible" onClick={this.handleHamburgerMenu}>
                        <span></span>
                        <span></span>
                        
                    </button>
                </div>
                
                <nav>
                    <ul>
                        <li><NavLink exact to="index" title="o nas" target="_self">o nas</NavLink></li>
                        <li><NavLink exact to="http" title="o projekcie" target="_self">o projekcie</NavLink></li>
                        <li><NavLink exact to="trainings" title="uslugi" target="_self" >usługi</NavLink></li>
                        <li><NavLink exact to="trainers" title="trenerzy" target="_self">trenerzy</NavLink></li>
                        <li><NavLink exact to="contact" title="kontakt" target="_self">kontakt</NavLink></li>
                    </ul>
                </nav>
    
                <div className="sidenav">
                    <button className="sprawdz-trening">sprawdz trening!</button>
                    <button className="umow-sie">umów się za darmo</button>
                    <div className="hamburger-menu-icons">
                        <Link to="https://www.linkedin.com/company/make-my-mind/" target="_blank"><img src={LinkedInDark} alt="LinkedIn"></img></Link>
                        <Link to="https://www.facebook.com/makemymindpl/" target="_blank"><img src={FacebookDark} alt="Facebook"></img></Link>
                        <Link to="#"><img src={TwitterDark} alt="Twitter" target="_blank"></img></Link>
                        <Link to="https://www.instagram.com/make_my_mind/" target="_blank"><img src={InstagramDark} alt="Instagram"></img></Link>
                    </div>
                </div>
                
                <button  
                onClick={this.handleHamburgerMenu}
                className="hamburger"
                >
                    <span className="hamburger__box">
                      <span className="hamburger__inner"></span>
                    </span>
                </button>
        </header>
   
        )
    }
}


export default Header;