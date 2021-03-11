import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>


                {/*===================== navbar =========================*/}
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" href="#"><img src="Asssets/image/ll.png" /> </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" href="#">Home</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link" href="#">News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link btn nav_btn ml-5" href="#">Install</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Router>
                    </div>
                </div>
                {/*================= navbar end =============================================*/}
            </div>
        );
    }
}

export default Header;