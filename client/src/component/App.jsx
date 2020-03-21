import React from 'react';
import style from './App.module.css';
import Logo from './Logo/logo';
import Lead_Form from './Lead_Form/leadForm';
import Nav_Bar from './Nav_Bar/navBar';


class App extends React.Component {
  
    render() {
      
      return (
        
        <div>
          <Logo />
          <Nav_Bar />
          <Lead_Form />
        </div>
      )
    }
  }

export default App; 