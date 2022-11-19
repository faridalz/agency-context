import React, {createContext, useState, useEffect} from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Head from "./components/head";
import Dropdown from "./components/dropdown";
import Portfolio from "./components/portfolio";
import PortfolioDetails from "./components/portfolioDetails";
import Services from "./components/services";
import ChooseUs from "./components/chooseUs";
import Process from "./components/process";
import LetsTalk from "./components/letsTalk";
import Form from "./components/form";
import Footer from "./components/footer";
import Blog from "./components/blog";
import About from "./components/about";
import Script from "./js/script";


import {dropdownInfo, headSlider1, services, portfoio, process, team} from "./data";
export const itemsContext = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  return (
      <itemsContext.Provider value={[headSlider1, dropdownInfo, services, portfoio, process, team]}>
        <div>
            < Script />
            < Navbar />
            < Dropdown />
          {
          loading ?
            <div>
              <div className="page-loader" loading = {loading}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            :
              <Switch>
                <Route exact path="/" render = {props =>(
                  <div>
                    <Head />
                    <div id="portfolioHeader" className="justleft">
                      < Services />
                      < Portfolio />
                      < ChooseUs />
                      < Process />
                      < LetsTalk />
                      < Form />
                      < Footer />
                    </div>
                  </div>
                  
                )} />
                <Route exact path="/portfolio-:id" render = {props =>(
                  <div  className="justleft">
                    < PortfolioDetails {...props} />
                    < Footer  {...props}  />
                  </div>
                )} />            
                <Route exact path="/blog" render = {props =>(
                  <div className="justleft">
                    < Blog {...props} />
                  </div>
                )} />
                <Route exact path="/about" render = {props =>(
                  <div  className="justleft">
                    < About {...props} />
                    < Footer />
                  </div>
                )} />
                
                <Route render = {props =>(
                  <div>
                    <h4 style={{color: "white", textAlign: "center", marginBottom: "10%", marginTop: "10%"}}  {...props}>NOT FOUND!</h4>
                  </div>
                )} />
              </Switch>
          }
          </div>
      </itemsContext.Provider>
  );
}

export default App;
