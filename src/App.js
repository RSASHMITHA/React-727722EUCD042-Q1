import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const themes = [
  { background: 'lightblue', text: 'black' },
  { background: 'yellow', text: 'black' },
  { background: 'pink', text: 'black' },
  // Add more themes as needed
];

const App = () => {
  return (
      <ThemeSwitcher themes={themes} />
  );
};

export default App;