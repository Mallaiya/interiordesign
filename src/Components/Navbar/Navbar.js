import React , {Component} from 'react';

import './Navbar.css'
class Navbar extends Component {
    
    state = {
        activeLink : 0,
        navlink : ['about us', 'services', 'catalogue', 'pricing', 'contacts']
    }
    activeLinkNavbarHandler = (index) =>{
        this.setState({
            activeLink : index
        });
        console.log(this.state.activeLink);    
    }

    render () {
        return (
            <div className = "Navbar">
                <nav className={this.props.toggleNavClass}>
                    <div className="container">
                        <ul className="navbar-orderlist">
                        {
                            this.state.navlink.map((list , index) => {
                                return (
                                    <li key={index} className={this.state.activeLink === index?"navbar-list navbar-list-active":"navbar-list"} onClick={this.activeLinkNavbarHandler.bind(this, index)}><a href="#/" className="navbar-list-item text-uppercase">{list}</a></li>   
                                );            
                            })
                        } 
                        </ul>
                    </div>
                </nav>
            </div>
        );  
    }
}

export default Navbar;