import React , {Component} from 'react';

import './Banner.css';
import galleryImg1 from './images/galleryImg1.jpg';
import galleryImg2 from './images/galleryImg2.jpg';
import galleryImg3 from './images/galleryImg3.jpg';
import galleryImg4 from './images/galleryImg4.jpg';
import galleryImg5 from './images/galleryImg5.jpg';
import galleryImg6 from './images/galleryImg6.jpg';
import thumb1 from './images/thumb1.jpg';
import thumb2 from './images/thumb2.jpg';
import thumb3 from './images/thumb3.jpg';
import thumb4 from './images/thumb4.jpg';
import thumb5 from './images/thumb5.jpg';
import thumb6 from './images/thumb6.jpg';
import service1 from './images/service-img1.jpg';
import service2 from './images/service-img2.jpg';

class Banner extends Component {
    state = {
        galleryViewImage : galleryImg1
    }
    changeImageGalleryHandler = (target) =>{
        this.setState({
            galleryViewImage : target
        })
    }
    render () {
        return (
            <div className = "Banner">
                <div className = "container"> 
                    <div className = "banner-content">
                        <div className = "banner-image-gallery">
                            <div className="row">
                                <div className = "col-lg-8">
                                    <div className = "left-banner-image-gallery">
                                        <img src = {this.state.galleryViewImage} alt = "Gallery 1" />
                                    </div>
                                </div>
                                <div className = "col-lg-4">
                                    <div className = "right-banner-image-gallery">
                                        <div className = "row">
                                            <div className ="gallery-img" onClick={this.changeImageGalleryHandler.bind(this, galleryImg1)}>
                                                <div className = {this.state.galleryViewImage===galleryImg1?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb1}  alt ="Gallery 2"/>
                                            </div>
                                            <div className ="gallery-img" onClick={this.changeImageGalleryHandler.bind(this,  galleryImg2)}>
                                                <div className = {this.state.galleryViewImage===galleryImg2?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb2}  alt = "Gallery 3"/>
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className ="gallery-img"  onClick={this.changeImageGalleryHandler.bind(this,galleryImg3)}>
                                                <div className = {this.state.galleryViewImage===galleryImg3?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb3} alt = "Gallery 4" />
                                            </div>
                                            <div className ="gallery-img" onClick={this.changeImageGalleryHandler.bind(this, galleryImg4)}>
                                                <div className = {this.state.galleryViewImage===galleryImg4?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb4}  alt = "Gallery 5"/>
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className ="gallery-img" onClick={this.changeImageGalleryHandler.bind(this, galleryImg5)}>
                                                <div className = {this.state.galleryViewImage===galleryImg5?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb5} alt = "Gallery 6" />
                                            </div>
                                            <div className ="gallery-img" onClick={this.changeImageGalleryHandler.bind(this, galleryImg6)}>
                                                <div className = {this.state.galleryViewImage===galleryImg6?"img-overlay-unset":"img-overlay-set"}></div>
                                                <img src={thumb6} alt = "Gallery 7"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "banner-quote">
                                <div className = "row">
                                    <div className = "col-lg-2">
                                        <h2 className="text-uppercase">Hello!</h2>
                                    </div>
                                    <div className = "col-lg-10">
                                        <p>Interior Designs one of <a href="#/">free website templates</a> created by TemplateMonster.com team. This website template is opti mized for 1024X768 screen resolution. It is also XHTML &amp; CSS valid. It has several pages: About, Services, Catalogue, Pricing, Contact Us (note that contact us form – doesn’t work).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "service-content">
                                <h2>Our Services List</h2>
                            <div className = "row">
                                <div className = "col-lg-6">
                                    <img src = {service1} alt="Service 1" />
                                    <ul>
                                        <li>Interior Decorating Services</li>
                                        <li>Complete Color Analysis</li>
                                    </ul>
                                </div>
                                <div className = "col-lg-6">
                                    <img src = {service2} alt="Service 2" />
                                    <ul>
                                        <li>Design Services for Home Construction</li>
                                        <li>Interior Design Remodeling</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;
