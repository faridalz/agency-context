import React, {useContext} from 'react';
import Footer from "./footer";
import Portfolio from "./portfolio";
import Services from "./services";
import ChooseUs from "./chooseUs";
import Process from "./process";
import LetsTalk from "./letsTalk";
import Form from "./form";
import Navbar from "./navbar";
import {itemsContext} from "../App";
import Script from "../js/script";
import Rectangle91 from '../images/Rectangle 91.png';
import Vector12 from '../images/Vector12.png';
import Vector11 from '../images/Vector11.png';



export default function About() {
    const [headSlider1, dropdownInfo, services, portfolio, process, team] = useContext(itemsContext);
    return (
        <div>
            < Script />
            <div style={{display: "none"}}>
                  < Navbar />
                  < Services />
                  < Portfolio />
                  < ChooseUs />
                  < Process />
                  < LetsTalk />
                  < Form />
                  < Footer />
            </div>
            <div className="blogHeader">
                <div className="container">
                    <h6 className="blogp1">HAQQIMIZDA</h6>
                    <h4 className="blogp2">We are a new kind of digital partner</h4>
                </div>
            </div>
            <img className="aboutPic" src={Rectangle91} alt="Rectangle91" />
            <div className="aboutP1">WELCOME TO CRAZY MOTIONS</div>
            <div className="aboutP2">We Are Able To Provide <br /> Your Digital Needs </div>
            <div className="aboutP3">Code is a company of specialists in design,  <br  className="d-block d-sm-none d-sm-block d-md-none"  />
                technology, <br class="d-none d-md-block d-xl-block" /> product delivery, business <br  className="d-block d-sm-none d-sm-block d-md-none"  /> strategy  and coaching. <br /><br />

                We wrap cross-disciplinary teams around  <br  className="d-block d-sm-none d-sm-block d-md-none"  />  your business to  <br class="d-none d-md-block d-xl-block" /> drive the outcomes you 
                <br  className="d-block d-sm-none d-sm-block d-md-none"  />need to compete.

            </div>
            <button className="aboutButton">BİZDƏN GÖRÜŞ AL</button>


            <div className="row team1">
                <section className="col-md-5 col-xs-12">
                    <p>Komandamız</p>
                </section>
            </div>

            <div style={{position: "relative"}} id="team2" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {team.map(item => (
                        <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                            <div className="row team21">
                            {team.map(item2 => (
                                <section key={item2.id} className={item2.id === item.id ? "col-md-3 col-xs-6 " : "col-md-3 col-xs-6 d-none d-md-block d-xl-block"}>
                                    <img src={item2.image} alt="" />
                                    <p className="team22">{item2.name}</p>
                                    <p className="team23">{item2.info}</p>
                                    <p className="team24">{item2.info2}<br /> {item2.info3}<br /> 
                                    {item2.info4} <br /> {item2.info5}</p>
                                </section>
                            ))}
                            </div>
                        </div>
                    ))}
                   
                </div>
                <a className="carousel-control-prev" href="#team2" role="button" data-slide="prev">
                    <img src={Vector12} aria-hidden="true" alt="Vector12" />
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#team2" role="button" data-slide="next">
                    <img src={Vector11} aria-hidden="true" alt="Vector11" />
                    <span classNaame="sr-only"></span>
                </a>    
            </div>   
            <br />
         
        </div>
    )
}                
