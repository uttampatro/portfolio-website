import React from 'react';
import './App.css';
import BackgroundImage from './components/Images/bg.png';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <Projects />
        </div>
    );
}

export default App;
