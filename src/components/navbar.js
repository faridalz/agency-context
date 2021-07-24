import React, { Component } from 'react';
// import {toggleNav} from "../js/script";
// import {toggleleft} from "../js/script";
import Script from "../js/script";
import {Link} from "react-router-dom";
import * as Scroll from "react-scroll";



export default class Navbar extends Component {
    render() {
        return (
            
            <div>
                < Script />
                <div className="dark1">
                    <p className="darkp1">Dark Mode</p>
                    <div id="toggle">
                        <i className="indicator"></i>
                    </div>
                    <a style={{marginRight: "10%"}} href="https://whatsapp.com" target="_blank"><img src="images/wp4.png" alt="" /></a>
                    <a href="https://instagram.com" target="_blank"><img src="images/insta4.png" alt="" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src="images/in4.png" alt="" /></a>
                    <a href="https://facebook.com" target="_blank"><img src="images/fb4.png" alt="" /></a>
                    <p className="darkp2"><img src="images/tel2.png" alt="" /> info@crazyjobs.com</p>
                    <p className="darkp3"><img src="images/tel1.png" alt="" /> +994 12 0000000</p>
                </div>

                <nav>
                    <div className='container'>
                        <div className="logo">LOGO</div>
                        <ul>
                            <li><Link to="/" >Əsas Səhifə</Link></li>
                            <li><Link to="/about">Haqqımızda</Link></li>
                            <li>
                                <a className="toggleNav" href="#" style={{position: "relative"}}>Xidmətlərimiz
                                <img id="img112" className="img1" src="images/keyboard_arrow_down.png" alt="" />
                                <img className="img2" src="images/Vector.png" alt="" /></a>
                            </li>
                            <li><Scroll.Link className="portfolioDesktopToggle" to="portfolioHeader" smooth={true} duration={500}>
                                <Link to="/">Portfolio</Link>
                                </Scroll.Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <button>BİZDƏN GÖRÜŞ AL</button>
                        </ul>
                    </div>
                    <button className="d-block d-sm-none d-sm-block d-md-none leftside1" type="button">
                        <img className="left1" src="images/Toggle.png" alt="" />
                        <img className="left2" src="images/x.png" alt="" />
                    </button>
                    <aside className="nav-sidebar" id="nav2" >
                        <br /><br />
                        <p>LOGO</p>
                        <ul>
                            <li><Link className="nav-item nav-link mainToggleMobile" to="/" >Əsas Səhifə</Link></li>
                            <li><Link className="nav-item nav-link aboutToggleMobile" to="/about">Haqqımızda</Link></li>
                            <li><a className="nav-item nav-link droptt" href="#">Xidmətlərimiz
                                <img className="down2" src="images/down1.png" alt="" />
                                <img className="up2" src="images/up1.png" alt="" />
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
                        <button>BIZDƏN GÖRÜŞ AL</button>
                        <p className="contactsAddress"><img style={{paddingBottom: "1%"}} src="images/recep.png" alt="" /> Nizami street. 56.</p>    
                        <p className="contactsTel"><img src="images/call.png" alt="" /> +994 12 0000000</p>     
                        <p className="contactsEmail"><img src="images/mail.png" alt="" /> info@crazyjobs.com</p> 
                        <a style={{marginLeft: "3%"}} href="https://whatsapp.com"><img src="images/wp4.png" alt="" /></a>
                        <a href="https://instagram.com"><img src="images/insta4.png" alt="" /></a>
                        <a href="https://linkedin.com"><img src="images/in4.png" alt="" /></a>
                        <a href="https://facebook.com"><img src="images/fb4.png" alt="" /></a>
                    </aside>
                </nav>

            </div>
        )
    }

}

