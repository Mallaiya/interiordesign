import React, {Component} from 'react';


import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className = "Header">
                <div className = {this.props.toggleOverlayClass} onClick={this.props.overlayEffect}></div>
                <div className = "header-main">
                    <div className = "container">
                        <div className = "row">
                            <div className = "header-content">
                                <div className = "text-uppercase left-content">
                                    <h1 className = "uppercase site-logo" ><a href="#/">int<span>e</span>rior</a><span>&nbsp;design</span></h1>
                                </div>          
                                <div className = "right-content">
                                    <input type="text" />
                                </div>
                                <div className = "menu-bar">
                                    <i className = {this.props.menuBarToggleClass} onClick={this.props.toggleNav}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Header;