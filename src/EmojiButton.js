import React from 'react';

// Button component.
function EmojiButton(props) {
    // console.log(props)
    return (
      <button>
        <span role="img">{props.emoji}</span>
        {props.labelText}
      </button>
    )
  }

export default EmojiButton;