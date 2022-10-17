import React, {Component} from "react";
import {BrowserRouter, Link, NavLink, Route, Routes, HashRouter} from "react-router-dom";
import './App.css';
import IntroductionPanel from "./IntroductionPanel";
import AboutMe from "./AboutMe";
import Layout from "./Layout";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <HashRouter>
            <div id={"navBar"}>
              <Routes id={"links"}>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<IntroductionPanel/>} />
                  <Route path="AboutMe" element={<AboutMe/>}/>
                  <Route path="Projects" element={<Projects/>}/>
                  <Route path="Contact" element={<Contact/>}/>
                  <Route path="*" element={<IntroductionPanel/>} />
                </Route>
              </Routes>
            </div>
          </HashRouter>
        </div>

    );
  }
}

export default App;
