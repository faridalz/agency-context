import React, {useContext} from 'react';
import {itemsContext} from "../App";
import Ellipse16 from '../images/Ellipse 16.png';
import rect1 from '../images/rect 1.png';
import Polygon1 from '../images/Polygon 1.png';





export default function Head() {
    const [headSlider1, dropdownInfo] = useContext(itemsContext);


    return (
        <div>
            <div style={{position: "relative"}} id="headSlider" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#headSlider" data-slide-to="0" className="active"></li>
                    <li data-target="#headSlider" data-slide-to="1"></li>
                    <li data-target="#headSlider" data-slide-to="2"></li>
                    <li data-target="#headSlider" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                {headSlider1.map(item => (
                    <div className={item.id === 1 ? "carousel-item active" : "carousel-item"} key={item.id}>
                        <div className="sliderbody">
                            <img className="mainimage" src={item.image} alt="Group482" />
                            <p className="head1">{item.header1} <br /> {item.header11}</p>
                            <p className="head2">{item.header2} <br className='d-block d-sm-none d-sm-block d-md-none' />
                            {item.header21} <br className='d-none d-md-block d-xl-block' />
                            {item.header22} <br className='d-block d-sm-none d-sm-block d-md-none' /> 
                            {item.header23} <br className='d-none d-md-block d-xl-block' />
                            {item.header24} <br className='d-block d-sm-none d-sm-block d-md-none' />
                            {item.header25}
                            </p>
                            <img className="adds1" src={Ellipse16} alt="Ellipse16" />
                            <img className="adds2" src={Ellipse16} alt="Ellipse16" />
                            <img className="adds3" src={rect1} alt="rect1" />
                            <img className="adds4" src={Polygon1} alt="Polygon1" />
                        </div>
                    </div>
                ))}

                    
                </div>
            </div>   
        </div>     
    )
}

