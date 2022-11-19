import React from 'react';

import Group235 from '../images/Group 235.png';
import Group334 from '../images/Group 334.png';
import Group336 from '../images/Group 336.png';



export default function ChooseUs() {
    return (
        <div>
            <br /><br /><br />
            <div class="row tools7">
                <section className="col-md-5 col-xs-12">
                    <p>Bizi Seçənlər</p>
                </section>
                <section className="col-md-7 col-xs-12">
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics,
                         a <br /> large language ocean. Far far away, behind the word mountains, far from 
                         the <br /> countries Vokalia and Consonantia, there live the blind texts.</p>
                </section>
            </div>

            <img className="d-none d-md-block d-xl-block" style={{width: "35%", float: "right", marginRight: "10%"}} src={Group235} alt="Group235" />



            <div style={{position: "relative", float: "left"}} id="captions1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#captions1" data-slide-to="0" className="active"></li>
                    <li data-target="#captions1" data-slide-to="1"></li>
                    <li data-target="#captions1" data-slide-to="2"></li>
                    <li data-target="#captions1" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Group334} alt="Group334" />
                        <br /><br />
                        <img src={Group336} alt="Group336" />  
                    </div>
                    <div className="carousel-item">
                        <img src={Group334} alt="Group334" />
                        <br /><br />
                        <img src={Group336} alt="Group336" />
                    </div>
                    <div className="carousel-item">
                        <img src={Group334} alt="Group334" />
                        <br /><br />
                        <img src={Group336} alt="Group336" />
                    </div>
                    <div className="carousel-item">
                        <img src={Group334} alt="Group334" />
                        <br /><br />
                        <img src={Group336} alt="Group336" />
                    </div>
                </div>
            </div>    
        </div>
    )
}
