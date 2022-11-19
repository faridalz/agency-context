import React, {useContext} from 'react';
import {itemsContext} from "../App";
import {Link} from "react-router-dom";

export default function Portfolio() {
    const [headSlider1, dropdownInfo, services, portfolio] = useContext(itemsContext);
    return (
            <div>
                <div id="portf" className="row tools3">
                <section className="col-md-5 col-xs-12">
                    <p>Portfoliomuz</p>
                </section>
                <section className="col-md-7 col-xs-12">
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a <br /> large language ocean. Far far away, behind the word mountains, far
                        from the <br /> countries Vokalia and Consonantia, there live the blind texts.</p>
                </section>
            </div>
            <div className="container">
                <div className="row tools5">
                {portfolio.map(item => (
                    <section className="col-md-3 col-xs-12">
                        <Link style={{textDecoration: "none"}} to={`/portfolio-${item.id}`}>
                            <img src={item.image} alt="" />
                            <p className='design1'>{item.name}</p>
                            <p className="design2">{item.info}</p>
                        </Link>   
                    </section>
                ))}
                </div>
            </div>

            <button className="tools6">HAMISINA BAX</button>
        </div>    
    )
}
