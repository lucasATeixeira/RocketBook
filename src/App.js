import React, { useState } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import './style.css';

const App = () => {
  const [posts] = useState([
    {
      name: 'Lucas Teixeira',
      time: 'há 3 minutos',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.`,
    },
    {
      name: 'Marina Gabriela',
      time: 'há 1 hora',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Senectus et netus et malesuada fames ac turpis egestas. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Ut sem nulla pharetra diam sit amet.',
    },
    {
      name: 'Erick Cardoso',
      time: 'há 15 hora',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Diam vulputate ut pharetra sit amet aliquam id diam.',
    },
  ]);
  return (
    <>
      <Header />
      <div className="content">
        {posts.map(post => (
          <Post key={Math.random()} post={post} />
        ))}
      </div>
    </>
  );
};

export default App;
