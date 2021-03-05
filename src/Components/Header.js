import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>


                {/*===================== navbar =========================*/}
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="#"><img src="Asssets/image/ll.png" /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn nav_btn ml-5" href="#">Install</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {/*================= navbar end =============================================*/}
            </div>
        );
    }
}

export default Header;