import React, { Component } from 'react';
import {AppConfig} from '../Config/AppConfig'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AboutUs from './AboutUs';
import Dashboard from './Dashboard';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            socialLink:[],
            aboutUsP:[]
        }
    }

    componentDidMount(){
        this.getSocialLink();
        this.getAboutPage();
    }

    getSocialLink = () => {
        let url = `${AppConfig.AppUrl}sociallink`
        fetch(url).then((res) => res.json()).then((resp) =>{
            // console.log(resp.data)
            this.setState({
                socialLink:resp.data
            })
        })
    }

    getAboutPage = () => {
        let url = `${AppConfig.AppUrl}footerpages`
        fetch(url).then((res) => res.json()).then((resp) => {
            // console.log(resp.data,"<===")
            this.setState({
                aboutUsP: resp.data
            })
        })
    }

    handlePage = (item) => {
        console.log(item,"<=======")
    }

    render() {
        return (
            <div>
                <>
                    {/*==================== fotter start =========================*/}
                    <footer>
                        <div className="container-fluid">
                            <div className="row" style={{ padding: 22, backgroundColor: '#6495ed' }}>
                                <div className="col-md-4">
                                    <h6 className="foter_txt text-white">  © 2021 Swaprex </h6>
                                </div>
                                <div className="col-md-4">
                                    <div className="foter_middle">
                                        {this.state.socialLink.map((item, index) =>(
                                        <Link onClick={() => window.open(item.url)} className="text-white after_line" href>{item.title} </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="foter_rigt d-flex ">
                                {this.state.aboutUsP.map((item, index) => (
                                        <p onClick={() => this.handlePage(item)} className="text-white after_line">{item.title}</p>
                                            ))}
                                        {/* <a className="text-white" href>Terms &amp; Conditions</a>
                                        <a className="text-white" href>Terms &amp; Conditions</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/*================ footer end ================================*/}
                </>
            </div>
        );
    }
}

export default Footer;