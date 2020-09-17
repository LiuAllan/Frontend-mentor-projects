import React from 'react';
import './App.css';
// Components
import ArticlePreview from './components/ArticlePreview';

const App = () => {
  return (
    <div className="App">
      <ArticlePreview />

      <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/liuallan">Allan Liu</a>.
      </div>
    </div>
  );
}

export default App;
