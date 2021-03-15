import React, { Component } from 'react';
import {AppConfig} from '../Config/AppConfig'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            socialLink:[]
        }
    }

    componentDidMount(){
        this.getSocialLink();
    }

    getSocialLink = () => {
        let url = `${AppConfig.AppUrl}sociallink`
        fetch(url).then((res) => res.json()).then((resp) =>{
            console.log(resp.data)
            this.setState({
                socialLink:resp.data
            })
        })
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
                                        <Router>
                                        {this.state.socialLink.map((item, index) =>(
                                        <Link onClick={() => window.open(item.url)} className="text-white after_line" href>{item.title} </Link>
                                        ))}
                                        </Router>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="foter_rigt ">
                                        <a className="text-white" href>Privacy Policy </a>
                                        <a className="text-white" href>Terms &amp; Conditions</a>
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