import React, {useContext} from 'react';
import {itemsContext} from "../App";
import {Link, useParams} from "react-router-dom";
import Footer from "./footer";
import Portfolio from "./portfolio";
import Services from "./services";
import ChooseUs from "./chooseUs";
import Process from "./process";
import LetsTalk from "./letsTalk";
import Form from "./form";
import Navbar from "./navbar";


export default function PortfolioDetails() {
    const {id} = useParams();
    const [headSlider1, dropdownInfo, services, portfolio] = useContext(itemsContext);

    const details = portfolio.find((item) => {return item.id === Number(id)})

    return (
        <React.Fragment>
            <div className="portfolioDetails">
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
                        <h6 className="blogp1">DETAILS</h6>
                        <h4 className="blogp2">PORTFOLIO ITEMS</h4>
                    </div>
                </div>
                <img src={details.image}  alt="" />
                <p className='portfolioP1'>{details.name}</p>
                <p className="portfolioP2">{details.info}</p>
                <p className="portfolioP3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit commodi dicta aliquid deserunt vel, animi 
                    enim iusto consequatur, recusandae non perferendis 
                    eveniet ipsam dolorum alias eligendi esse magni natus quod.</p>
                <button><Link to="/" className="buttonLink"> Back to Portfolio</Link></button>

            </div>
        </React.Fragment>
    )
}
