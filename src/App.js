import React from 'react'
import Profile from './Profile/ComponentProfile.js';
import './App.css';
import image from './me.jpg';

function App() {

  const handleName=(name)=> {alert (`Hi I'm ${name}`)}

  return (
    <div className="App">
       <Profile fullName="Ben Hmida Wael"
           bio="Hi there !"
           profession="Student"
           handleName={handleName}
           >
        <div>
          <img src={image} style={{width:350,height:350,borderRadius:'50px', border:" 2px solid #2980B9",boxShadow: "0px 0px 10px 0px #2980B9"}} alt="me"></img>
        </div>
      </Profile>
    </div>
  );
}

export default App;
