import React, {Component} from "react";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import './App.css';
import IntroductionPanel from "./IntroductionPanel";
import AboutMe from "./AboutMe";
import Layout from "./Layout";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <BrowserRouter>
            <div id={"navBar"}>
              <Routes id={"links"}>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<IntroductionPanel/>} />
                  <Route path="AboutMe" element={<AboutMe/>}/>
                  <Route path="*" element={<IntroductionPanel/>} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>

    );
  }
}

export default App;
