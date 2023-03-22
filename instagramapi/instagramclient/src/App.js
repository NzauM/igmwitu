import logo from './logo.svg';
import './App.css';
import Viewposts from './Viewposts';
import Mynav from './Mynav';
import Addpost from './Addpost';
import Login from './Login'
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
        <Mynav/>
        <h1>Karibu sana IG Mwitu</h1>
        {/* <Login userLoggedIn={setUser}/> */}
        {/* {user ? <> <Addpost /> <Viewposts/> </> : <Login userLoggedIn={setUser}/>} */}
        You can Find All the Posts Here:
        <Viewposts/>
        <Addpost />
    </div>
  );
}

export default App;
