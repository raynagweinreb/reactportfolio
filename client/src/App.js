import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Nav from './components/Nav'
import Project from './components/Project'

function App() {
  return (
    <div >
<Header/>
<Nav/>
<AboutMe/>
<Project/>
<Footer/>

    </div>
  );
}

export default App;
