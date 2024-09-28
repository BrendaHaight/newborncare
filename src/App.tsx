import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Review } from "./types";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
