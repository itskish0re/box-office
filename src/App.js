import React from 'react';
import { Routes,Route} from "react-router";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route>
          <>Not found</>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
