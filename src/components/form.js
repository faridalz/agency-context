import React from 'react';
import Fb from '../images/fb.png';
import Linkedin from '../images/in.png';
import Twitter from '../images/twitter.png';
import Insta from '../images/insta.png';


export default function Form() {
    return (
        <div>
            <div className="row write1">
                <section className="col-md-7">
                    <p>Bizə yazmaqdan çəkinməyin</p>
                </section>
            </div>

            <div className="row write2">
                <section className="col-md-6">
                    <p>Speak to our Business Director, Steve. With no 
                        salespeople,<br className="d-none d-md-block d-xl-block" /> you always get to
                         talk straight to one of our discipline<br className="d-none d-md-block d-xl-block" /> leaders.<br /><br/>

                        Help us understand what you need by filling out
                         the form <br className="d-none d-md-block d-xl-block" /> and we’ll be in touch.</p>
                        <div className='row write3'>
                            <section className="col-md-4">
                                <p className="write31">ADDRESS:</p>
                                <p className="write32">Nizami. <br className="d-none d-md-block d-xl-block" /> küç, 56.</p>

                            </section>
                            <section className="col-md-8">
                                <p className="write31">ƏLAQƏ:</p>
                                <p className="write32">info@crazyjobs.com<br />+994-70-000-00-00</p>
                            </section>
                            <section style={{marginTop: "6%"}} className="col-md-6">
                                <p className="write31">SOSİAL:</p>
                                <a href="https://instagram.com/"><img src={Insta} alt="Insta" /></a>
                                <a href="https://twitter.com/"><img src={Twitter} alt="Twitter" /></a>
                                <a href="https://linkedin.com/"><img src={Linkedin} alt="Linkedin" /></a>
                                <a href="https://facebook.com"><img src={Fb} alt="Fb" /></a>
                            </section>
                        </div>
                </section>
                <section className="col-md-6">
                    <form action="">
                        <div className="form-group">
                            <label for="firstname">Ad/Şirkət*</label>
                            <input type="text" name="firstname" />
                        </div>

                        <div className="form-group">
                            <label for="tel">Telefon Nömrəsi*</label>
                            <input type="text" name="tel" />
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail*</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="message">Mesajınız</label>
                            <textarea type="text" name="firstname" cols="30" rows="7"></textarea>
                        </div>
                        <button>GÖNDƏR</button>
                    </form>
                </section>
            </div>  
            <br /><br /><br />
        
        </div>
    )
}
