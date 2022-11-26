import React from 'react';
import EmojiButton from './EmojiButton';

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

export default Header;