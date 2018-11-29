import React, { Component } from 'react';

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

class App extends Component {

  state = {
    navbarToggler : false
  }

  navbarToggleHandler = () => {
    console.log(this.state.navbarToggler);
    this.setState ({
      navbarToggler : !this.state.navbarToggler
    })
  }

  overlayEffectHandler = () =>{
    if(this.state.navbarToggler){
      this.setState({
        navbarToggler : !this.state.navbarToggler
      })      
    }
  }

  overlayScrollEffectHandler = () => {
    if(this.state.navbarToggler){
      this.setState({
        navbarToggler : !this.state.navbarToggler
      })      
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll',this.overlayScrollEffectHandler);
  }

  render() {
    const navbarToggleClass = this.state.navbarToggler?"nav-navbar navbar-show text-center":"nav-navbar navbar-hide text-center";

    const menuBarToggle = this.state.navbarToggler?"fa fa-times":"fa fa-bars";

    const overlayToggle = this.state.navbarToggler?"menu-overlay menu-overlay-show":"menu-overlay menu-overlay-hide";
    return (
      <div className="App">
        <Navbar toggleNavClass = {navbarToggleClass}/>
        <Header toggleNav = {this.navbarToggleHandler} toggleOverlayClass ={overlayToggle}
        overlayEffect = {this.overlayEffectHandler} menuBarToggleClass = {menuBarToggle}/>
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
