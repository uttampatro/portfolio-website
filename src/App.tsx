import React from 'react';
import './App.css';
import BackgroundImage from './components/Images/bgI.png';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
    return (
        <div
            style={{ backgroundImage: `url(${BackgroundImage})` }}
            className="App"
        >
            <Home />
            {/* <Projects /> */}
        </div>
    );
}

export default App;
