import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app_body">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
