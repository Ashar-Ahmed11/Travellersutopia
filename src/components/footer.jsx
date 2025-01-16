import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Footer() {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">e-Safar (Pvt) Ltd is Pakistan based Travel & Tourism company ,We Operate From Karachi, We have Wise Experience in Travel & Tourism Industry, We believe in Clients Satisfaction.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Umrah Packages</h6>
                            <ul class="footer-links">
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}  to="/regular-umrah">Regular Umrah Package</Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/group-umrah">Group Umrah Package</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/umrah" onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}>Umrah Packages</Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/contact-us" onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}>Contact Us</Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} to="/about-us" onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}>About Us</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                                <Link to="/umrah" onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}> e-Safar</Link>.
                            </p>
                            <p class="copyright-text">Site developed by: Metatech
                                
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="facebook" to="/umrah" target="blank"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="twitter" to="/umrah"><i class="fa fa-twitter"></i></Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="dribbble" to="/umrah"><i class="fa fa-dribbble"></i></Link></li>
                                <li><Link onClick={window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })} class="linkedin" to="/umrah"><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}