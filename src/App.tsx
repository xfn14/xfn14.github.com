// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar'

// import Homepage from './pages/Homepage'
// import Projects from './pages/Projects'
// import Project from './pages/Project'

import './App.css'

function App() {
    return (
        <div className="App">
            {/* <Router> */}
                <Navbar />
                <Outlet />

                {/* <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path='/projects/:id' element={<Project />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes> */}
            {/* </Router> */}
        </div>
    )
}

export default App
