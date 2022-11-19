import React, { Component, useState } from 'react';
import Script from "../js/script";
import {Link} from "react-router-dom";
import * as Scroll from "react-scroll";
import MobileToggle from '../images/Toggle.png';
import MobileToggleX from '../images/x.png';
import Wp from '../images/wp4.png';
import Insta from '../images/insta4.png';
import Linkedin from '../images/in4.png';
import Fb from '../images/fb4.png';
import Tel2 from '../images/tel2.png';
import Tel1 from '../images/tel1.png';
import ArrowDown from '../images/keyboard_arrow_down.png';
import Vector1 from '../images/Vector.png';
import Down1 from '../images/down1.png';
import Up1 from '../images/up1.png';
import Address1 from '../images/recep.png';
import call from '../images/call.png';
import Mail1 from '../images/mail.png';





export default function Navbar() {
    const [sub, setSub] = useState('BİZDƏN GÖRÜŞ AL')

    const handleClick = () => {
        setSub('DONE !');
        document.getElementById('subscribe1').style.backgroundColor = 'blue';
        document.getElementById('subscribe1').style.color = 'white';
    }

        return (
            
            <div>
                < Script />
                <div className="dark1">
                    <p className="darkp1">Dark Mode</p>
                    <div id="toggle">
                        <i className="indicator"></i>
                    </div>
                    <a style={{marginRight: "10%"}} href="https://whatsapp.com" target="_blank"><img src={Wp} alt="Wp" /></a>
                    <a href="https://instagram.com" target="_blank"><img src={Insta} alt="Insta" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                    <a href="https://facebook.com" target="_blank"><img src={Fb} alt="Fb" /></a>
                    <p className="darkp2"><img src={Tel2} alt="Tel2" /> info@crazyjobs.com</p>
                    <p className="darkp3"><img src={Tel1} alt="Tel1" /> +994 12 0000000</p>
                </div>

                <nav>
                    <div className='container'>
                        <div className="logo">LOGO</div>
                        <ul>
                            <li><Link to="/" >Əsas Səhifə</Link></li>
                            <li><Link to="/about">Haqqımızda</Link></li>
                            <li>
                                <a className="toggleNav" href="#" style={{position: "relative"}}>Xidmətlərimiz
                                <img id="img112" className="img1" src={ArrowDown} alt="ArrowDown" />
                                <img className="img2" src={Vector1} alt="Vector1" /></a>
                            </li>
                            <li><Scroll.Link className="portfolioDesktopToggle" to="portfolioHeader" smooth={true} duration={500}>
                                <Link to="/">Portfolio</Link>
                                </Scroll.Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <button id='subscribe1' onClick={handleClick}>{sub}</button>
                        </ul>
                    </div>
                    <button className="d-block d-sm-none d-sm-block d-md-none leftside1" type="button">
                        <img className="left1" src={MobileToggle} alt="MobileToggle" />
                        <img className="left2" src={MobileToggleX} alt="MobileToggleX" />
                    </button>
                    <aside className="nav-sidebar" id="nav2" >
                        <br /><br />
                        <p>LOGO</p>
                        <ul>
                            <li><Link className="nav-item nav-link mainToggleMobile" to="/" >Əsas Səhifə</Link></li>
                            <li><Link className="nav-item nav-link aboutToggleMobile" to="/about">Haqqımızda</Link></li>
                            <li><a className="nav-item nav-link droptt" href="#">Xidmətlərimiz
                                <img className="down2" src={Down1} alt="Down1" />
                                <img className="up2" src={Up1} alt="Up1" />
                                </a>
                                <ul className="droptt2">
                                    <li><Link className="nav-item nav-link" to="/seo">SEO</Link></li>
                                    <li><Link className="nav-item nav-link" to="smm">SMM</Link></li>
                                    <li><Link className="nav-item nav-link" to="advertisements">Google Reklamları</Link></li>
                                    <li><Link className="nav-item nav-link" to="/website">Website</Link></li>
                                    <li><Link className="nav-item nav-link" to="/other">Digər</Link></li>
                                </ul>    
                            </li>
                            <li><Scroll.Link to="portfolioHeader" smooth={true} duration={500} style={{cursor: "pointer", color: "white"}} className="nav-item nav-link portfolioToggle">Portfolio</Scroll.Link></li>
                            <li style={{border: "0"}}><Link className="nav-item nav-link blogToggleMobile" to="/blog">Bloq</Link></li>                
                        </ul>
                        <button id='subscribe1' onClick={handleClick}>{sub}</button>
                        <p className="contactsAddress"><img style={{paddingBottom: "1%"}} src={Address1} alt="Address1" /> Nizami street. 56.</p>    
                        <p className="contactsTel"><img src={call} alt="call" /> +994 12 0000000</p>     
                        <p className="contactsEmail"><img src={Mail1} alt="Mail1" /> info@crazyjobs.com</p> 
                        <a style={{marginLeft: "3%"}} href="https://whatsapp.com"><img src={Wp} alt="Wp" /></a>
                        <a href="https://instagram.com"><img src={Insta} alt="Insta" /></a>
                        <a href="https://linkedin.com"><img src={Linkedin} alt="Linkedin" /></a>
                        <a href="https://facebook.com"><img src={Fb} alt="Fb" /></a>
                    </aside>
                </nav>

            </div>
        )

}

