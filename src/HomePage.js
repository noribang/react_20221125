import React from 'react';
import Card from './Card';
import EmojiButton from './EmojiButton';

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

export default HomePage;
