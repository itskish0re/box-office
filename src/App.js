import React from 'react';
import { Routes,Route} from "react-router";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import Starred from "./pages/Starred";
import Show from "./pages/show";

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/starred" element={<Starred/>} />
        <Route path="/show/:id" element={<Show/>} />
        <Route>
          <>Not found</>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
