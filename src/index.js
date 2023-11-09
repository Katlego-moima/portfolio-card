import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Disclaimer />
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='./woman.avif' alt='katlego moima' />;
}

function Intro() {
  return (
    <div>
      <h1>Katlego Moima</h1>
      <p>
        self-driven junior software developer with a diploma in IT, specializing
        in Software Development. I am passionate about coding and have a strong
        desire to learn and explore new technologies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='ReactJS' emoji='💪🏾' color='red' />
      <Skill skill='NextJS' emoji='💪🏾' color='pink' />
      <Skill skill='NodeJS' emoji='👶🏾' color='green' />
      <Skill skill='JavaScript' emoji='💪🏾' color='yellow' />
      <Skill skill='HTML+CSS' emoji='💪🏾' color='orange' />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}
        {props.emoji}
      </span>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className='disclaimer'>
      <p>This card is for learning purposes, and the image used is not mine.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
