import React, {useContext} from 'react';
import {itemsContext} from "../App";


export default function Process() {
    const [headSlider1, dropdownInfo, services, portfolio, process] = useContext(itemsContext);

    return (
        <div>
            <div className="row processHeader">
                <section className="col-md-5 col-xs-12">
                    <p>İş Prosessimiz</p>
                </section>
            </div>

            <div style={{position: "relative"}} className="row process1">
                <img style={{position: "absolute", right: "2%", top: "-50%", opacity: "90%", width: "8%"}} src="images/rect 2.png" alt="" />
                <img style={{position: "absolute", right: "2%", top: "-30%", opacity: "60%", width: "8%"}} src="images/rect 2.png" alt="" />
                {process.map(item => (
                    <section  className={item.id === 4 || item.id === 5 || item.id === 6  ? "col-md-4 col-xs-12 d-block d-sm-none d-sm-block d-md-none" : "col-md-4 col-xs-12"
                    
                    } key={item.id}>
                        <img src={item.image} alt="" />
                        <p className="process2">{item.name}</p>
                        <p className="process3">{item.info1} <br /> {item.info2} <br /> {item.info3}</p>
                    </section>
                ))}
            </div>   
            <img className="arrow430 d-none d-md-block d-xl-block" src="images/Group 430.png" alt="" />

            <div style={{marginTop: "5vw"}} className="row process1">
                <section className="d-none d-md-block d-xl-block col-md-4 col-xs-12">
                    <img src="images/clipboards 1.png" alt="" />
                    <p className="process2">4. İş Bölgüsü</p>
                    <p className="process3">Layihənin uyğun komanda <br /> üzvlərinə ötürülməsi</p>
                </section>
                <section className="d-none d-md-block d-xl-block col-md-4 col-xs-12">
                    <img src="images/administration 1.png" alt="" />
                    <p className="process2">5. İcra</p>
                    <p className="process3">Layihənin həyata keçirilməsi və <br /> icrası</p>
                </section>      
                <section className="d-none d-md-block d-xl-block col-md-4 col-xs-12">
                    <img src="images/bar-graph 1.png" alt="" />
                    <p className="process2">6. Təhlil</p>
                    <p className="process3">Nəticələrin təhlili və növbəti <br /> addımların müzakirəsi</p>
                </section>
            </div>
            <img className="arrow430 d-none d-md-block d-xl-block" src="images/Group 430.png" alt="" />

 
        </div>
    )
}
