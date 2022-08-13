import React from 'react';
import './App.css';
import './index.css'

import { Footer, Blog, Possibility, Features, WhatMe, Header} from './Containers'
import { Cta, Brand, Navbar} from './index'

function App() {
  return (
    <div className='App'>
    <div className="gradient__bg">
    <Navbar/>
    <Header/>
  </div>
  <Brand/>
  <WhatMe/>
  <Features/>
  <Possibility/>
  <Cta/>
  <Blog/>
  <Footer/>
    
    </div>
  );
}

export default App;
