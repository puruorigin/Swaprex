import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppConfig } from '../Config/AppConfig'

class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            menuList:[]
        }
    }

    componentDidMount = () =>{
        this.getMenu();
    }

    getMenu = () => {
        let url = `${AppConfig.AppUrl}menu`
        fetch(url).then((resp) => resp.json()).then((res) => {
            // console.log(res.data,"Menu res")
            this.setState({
                menuList:res.data
            })
        })
    }

    render() {
        return (
            <div>
                {/*===================== navbar =========================*/}
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" href="#"><img alt="logo" src="Asssets/image/ll.png" /> </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        {this.state.menuList.map((item, index) => (
                                        <li className="nav-item ">
                                            <Link className="nav-link" onClick={() =>  window.open(item.menu_url)}><h3 className="menuBlink">{item.menu_title}</h3></Link>
                                        </li>
                                        ))}
                                        {/* <button className="iconbtn">Get SWX <img src="Asssets/image/horse.png"> 
                                        </img> </button> */}
                                        {/* <li className="nav-item ">
                                            <Link className="nav-link" href="#">News</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Contact Us</Link>
                                        </li> */}
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