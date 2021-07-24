import React from 'react';

export default function Footer() {
    return (
        <div>
                
            <footer className="panel-footer">
                <div className="row">
                    <section className="col-md-4 col-xs-12">
                        <p className="footerlogo">LOGO</p>
                        <p className="footerlogo2">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        <a className="img111" href="https://instagram.com/"><img style={{width: "9%"}} src="images/insta2.png" alt="" /></a>
                        <a className="img112" href="https://twitter.com/"><img style={{width: "9%"}}  src="images/twitter2.png" alt="" /></a>
                        <a className="img113" href="https://linkedin.com/"><img style={{width: "9%"}}  src="images/in2.png" alt="" /></a>
                        <a className="img114"href="https://facebook.com/"><img style={{width: "9%"}}  src="images/fb2.png" alt="" /></a>
                    </section>
                    <section className="col-md-2 col-xs-12">
                        <p className="footer1">SƏHİFƏLƏR</p> 
                        <a href="#">Əsas Səhifə</a>
                        <a href="#">Haqqımızda</a>
                        <a href="#">Xidmətlərimiz</a>
                        <a href="#">İşlərimiz</a>
                        <a href="#">Bloq</a>
                        <a href="#">Əlaqə</a>        
                    </section>
                    <section className="col-md-2 col-xs-12">   
                        <p className="footer1">RƏQƏMSAL</p> 
                        <a href="#">SMM</a>
                        <a href="#">VEB</a>
                        <a href="#">SEO</a>
                        <a href="#">Marketinq həlləri</a>
                        <a href="#">E-mail Marketinq</a>
                    </section>
                    <section className="col-md-2 col-xs-12">     
                        <p className="footer1">DİGƏR XİDMƏTLƏR</p>  
                        <a href="#">Brendinq</a>
                        <a href="#">Qrafik Dizayn</a>
                        <a href="#">Video Marketinq</a>
                        <a href="#">Kontent Marketinq</a>
                        <a href="#">Marketinq Konsultasiyası</a>                 
                    </section>
                    <section className="col-md-2 col-xs-12">  
                        <p className="footer1">ƏLAQƏ</p>  
                        <p className="footer2"><img src="images/location.png" alt="" /> Baku, Nizami st. 56.</p>    
                        <p className="footer2"><img src="images/loc2.png" alt="" /> +994 12 0000000</p>     
                        <p className="footer2"><img src="images/loc3.png" alt="" /> info@crazyjobs.com</p>     
                    </section>
                    <p id="corp1" className="d-block d-sm-none d-sm-block d-md-none" >©  2021 - Corporative Motion Solutions.</p>
                </div>
            </footer>
        </div>
    )
}
