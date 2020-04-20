import React from "react";
import style from "./App.module.css";
import Lead_Form from "./Lead_Form/leadForm";
import Nav_Bar from "./Nav_Bar/navBar";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import image from "./Images/handShake.png"
import logo from "./Images/latinatechies.com.png";
import Instant_Message from './Instant_Message/instant_message';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav_Bar />
        <Lead_Form />
        <Footer />
        <Instant_Message />
        
        
      </div>
    );
  }
}

export default App;
