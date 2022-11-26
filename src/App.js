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


function App() {
  return (
    <div className="App">
      <h1>Cleaned up...</h1>
      {element}
    </div>
  );
}

export default App;
