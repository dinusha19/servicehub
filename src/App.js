import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"

import PostRequirement from './pages/PostRequirement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/postRequirement" element={<PostRequirement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;