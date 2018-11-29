import React, {Component} from 'react';

import './Footer.css';
import socialIcons from './images/social-icons.png';

class Footer extends Component {
    render () {
        return (
            <div className = "Footer">
                <div className = "footer-row-1">
                    <div className = "footer-about-content">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-4">
                                    <h2>About Us</h2>
                                    <p>This <a href="#/">Interior Design Template</a> goes with two pack ages: with PSD   source files and without them.PSD source files are available for  free for the registered members of Templates.com. 
                                    </p>
                                    <p>The basic package   (without PSD source) is available for anyone without registration.
                                    </p>
                                </div>
                                <div className = "col-md-4">
                                    <h2>Testimonials</h2>
                                    <p><i className = "fas fa-quote-left"></i>&nbsp; At vero eos et accusamus et iusto odio tium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.</p>
                                    <p className = "name"><b>James Reese</b></p>
                                    <p>Managing Director</p>
                                </div>
                                <div className = "col-md-4">
                                    <h2>What’s New?</h2>
                                    <a href="#/" className = "date">15.08.2011</a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque.</p>
                                    <a href="#/" className = "date">11.08.2011</a>
                                    <p>Totam rem aperiam, eaque ipsa quae ab illo inven tore veritatis et quasi architecto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "footer-row-2">
                    <div className ="footer-contact-content">
                        <div className ="container">
                            <div className = "row">
                                <div className = "col-md-4">
                                    <p>Interior Design &copy; 2011 Privacy Policy</p>
                                    <p><a href="#/">Website Template</a> by TemplateMonster.com</p>
                                </div>
                                <div className = "col-md-4">
                                    <h2><span>+1(800)</span>123-1234</h2>
                                </div>
                                <div className = "col-md-4">
                                    <img src = {socialIcons} alt = "Social Icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;