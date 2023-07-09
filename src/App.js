import React from 'react';
import Header from './components/Header/Header.jsx';
import AnimationBox from './components/AnimationBox/AnimationBox.jsx';
import TopCreatersBox from './components/TopCreaters/TopCreaters.jsx';
import CollectionBox from './components/Collections/Collections.jsx';
import FooterBox from './components/Footer/Footer.jsx';

import BgIcon from './components/Background/Background.jsx';

import './App.css';

const App = () => (
  <div className="container">
    <Header />  
    <AnimationBox />  
    <TopCreatersBox/> 
    <CollectionBox/>
    <FooterBox />  
    <BgIcon/>
    </div> 

);



export default App;

