// import logo from './logo.svg';
// import './App.css';
import './style.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import EmojiButton from './EmojiButton';

// // Button component.
// function EmojiButton(props) {
//   // console.log(props)
//   return (
//     <button>
//       <span role="img">{props.emoji}</span>
//       {props.labelText}
//     </button>
//   )
// }
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
// Composition-children
function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  )
}

// HomePage component.
function HomePage() {
  return (
    <main>
      <Card title="Welcome to PetLaaaand!">
        <em>Find your dream pet</em>
        <p>Like puppies....</p>
        <h3>Like kittens...</h3>
      </Card>
      <Card title="What pets would you like to see?">
        <div>
            <EmojiButton emoji="😸" labelText="Cats"/>
            <EmojiButton emoji="🐕" labelText="Dogs" />
        </div>
      </Card>
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
