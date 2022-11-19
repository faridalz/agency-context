import React, {useContext} from 'react';
import {itemsContext} from "../App";
import Script from "../js/script";



export default function Services() {
    window.addEventListener('scroll',()=>{
        let content2 = document.querySelectorAll('.tools2 .col-md-4');
        content2.forEach((item)=>{
            let ContentPosition2 = item.getBoundingClientRect().top;
            let ScreenPosition = window.innerHeight;
            if(ContentPosition2 < ScreenPosition) {
                item.classList.add('active11');
            } 
            else{
                item.classList.remove('active11');
        };
        })
    });
    const [headSlider1, dropdownInfo, services] = useContext(itemsContext);
    return (
        <div>
            < Script />
            <div className="twins">
                <button className="dropnav" id="butt1">XİDMƏTLƏRİMİZ</button>
                <button className="dropnav3" id="butt2">PORTFOLİO</button>
            </div>

            <div className="row tools1">
                <section className="col-md-5 col-xs-12">
                    <p>Xidmətlərimiz</p>
                </section>
                <section className="col-md-7 col-xs-12">
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics,
                         a <br /> large language ocean. Far far away, behind the word mountains, far from the <br /> countries
                        Vokalia and Consonantia, there live the blind texts.</p>
                    <button>BİZİMLƏ ƏLAQƏ</button>
                </section>
            </div>    

            <div className="container">
                <div className="row tools2">
                    {services.map(item => (
                    <div className="col-md-4 col-xs-12" key={item.id}>
                        <img src={item.image} alt="" />
                        <p className="card1">{item.name}</p>
                        <p className="card2">{item.info}.</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>    
    )
}
