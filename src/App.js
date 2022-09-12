import React from 'react';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import About from './containers/About';
import './App.css';
import GymProject from './components/IndividualProjects/GymProject';
import HelloWorld from './components/IndividualProjects/HelloWorld';
import MusicElephant from './components/IndividualProjects/MusicElephant';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/shunamccallum.github.io" element={<HomeContainer />} />
          <Route exact path="/shunamccallum.github.io/about" element={<About />} />
          <Route exact path="/shunamccallum.github.io/projects" element={<Projects />} />
          <Route exact path="/shunamccallum.github.io/projects/the_gym" element={<GymProject />} />
          <Route exact path="/shunamccallum.github.io/projects/hello_world" element={<HelloWorld />} />
          <Route exact path="/shunamccallum.github.io/projects/music_elephant" element={<MusicElephant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
