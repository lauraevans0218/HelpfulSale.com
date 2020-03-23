import React from "react";
import style from "./App.module.css";
import Lead_Form from "./Lead_Form/leadForm";
import Nav_Bar from "./Nav_Bar/navBar";
import Header from "./Header/header";
import Background from "./Background/background";
import Footer from "./Footer/footer";
import image from "./Images/handShake.png"



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav_Bar />
        <Background />
        <Lead_Form />
        <Footer />
      </div>
    );
  }
}

export default App;
