import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskManager from "./pages/TaskManager";

const App: React.FC = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 z-[100] relative flex justify-end">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about" className="mr-4">
            About
          </Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
