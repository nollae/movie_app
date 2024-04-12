import React from 'react';
import { HashRouter ,Routes, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from './routes/Home';
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/movie-detail" exact={true} 
          element={<Detail render={(props) => ({ ...props })}   />} />
      </Routes>
    </HashRouter>
  )
}

export default App;