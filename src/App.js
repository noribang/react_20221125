// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

// function createCard(greeting, subheader) {
//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <h2>{subheader}</h2>
//     </div>
//   )
// }

function Card(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <h2>{props.subheader}</h2>
    </div>
  )
}

const element = (
  <div>
    <Card greeting="Hola!" subheader="Friday!"/>
    <Card greeting="Greetings!" subheader="Humans!"/>
    {/* {Card({greeting: "Hola from JSX!", subheader:"Time to learn"})}
    {Card({greeting: "Ques component?", subheader: "Let's find out!"})} */}
  </div>
)

// Button component.
function EmojiButton(props) {
  console.log(props)
  return (
    <button>
      <span role="img">{props.emoji}</span>
      {props.labelText}
    </button>
  )
}
// Header component
function Header(props) {
  return (
    <header>
      <h1>{props.heading}</h1>
      <nav>
        <EmojiButton emoji="👤" labelText="Login"/>
      </nav>
    </header>
  )
} 
// HomePage component.
function HomePage() {
  return (
    <main>
      <div className="card">
        <h2>Welcome to PetLand!</h2>
        <em>Find your dream pet</em>
      </div>
      <div className="card">
        <h2>What pets would you like to see?</h2>
        <div>
          <EmojiButton emoji="😸" labelText="Caaats"/>
          <EmojiButton emoji="🐕" labelText="Dogs" />
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <div>
      <Header heading="PetLand" />
      <HomePage />
    </div>
  );
}

export default App;
