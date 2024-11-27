import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <Router>
            <div className='w-full flex items-center justify-center'>
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                
            </div>
        </Router>
    );
};

export default App;
