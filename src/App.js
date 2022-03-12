import React from 'react';
import { Routes,Route} from "react-router";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/show";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route path="/show/:id" element={<Show/>} />
        <Route>
          <>Not found</>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
