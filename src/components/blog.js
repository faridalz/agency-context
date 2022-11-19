import React, {useState, useEffect} from "react";
import Footer from "./footer";
import Portfolio from "./portfolio";
import Services from "./services";
import ChooseUs from "./chooseUs";
import Process from "./process";
import LetsTalk from "./letsTalk";
import Form from "./form";
import Navbar from "./navbar";
import Rectangle129 from '../images/Rectangle 129.png';


export default function Blog() {
    return (
        <div>
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
                    <h6 className="blogp1">BLOQ</h6>
                    <h4 className="blogp2">Thoughts. Ideas. Opinion. News</h4>
                </div>
            </div>

            <div className="container">
                <div className="blogInfo row">
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                    <section className="col-xs-4">
                        <img src={Rectangle129} alt="Rectangle129" />
                        <section className="blogInfop1">INSIGHT - <section>9 DECEMBER 2020</section></section>
                        <a href="#"><h6 className="blogInfop2">The Manchester restaurants <br /> that are embracing digital </h6></a>
                    </section>
                </div>
            </div>
            < Footer />
         </div>
 
    )
}
