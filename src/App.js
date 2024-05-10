import logo from './logo.svg';
import './App.css';
import AlbumFeature from './features/Album';

import TodoFeature from './features/todo';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

// npm install sass --force
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />


      <h1><NavLink to="/todo" activeClassName="active-menu"> todo </NavLink></h1>
      <h2><NavLink to="/album">album</NavLink></h2>
      <h3><NavLink to="/">home</NavLink></h3>
      <Routes>

        <Route path="/" element={<TodoFeature />} />
        <Route path="/todo" element={<TodoFeature />} />
        <Route path="/album" element={<AlbumFeature />} />
      </Routes>


    </div>
  );
}

export default App;
