import React, { Component } from 'react';
import {AppConfig} from '../Config/AppConfig'
import {Link} from 'react-router-dom'

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
        // this.getAboutPage();
    }

    getSocialLink = () => {
        let url = `${AppConfig.AppUrl}sociallink`
        fetch(url).then((res) => res.json()).then((resp) =>{
            console.log(resp.data,"<====")
            this.setState({
                socialLink:resp.data
            })
        })
    }

    // getAboutPage = () => {
    //     let url = `${AppConfig.AppUrl}footerpages`
    //     fetch(url).then((res) => res.json()).then((resp) => {
    //         console.log(resp.data,"<===")
    //         this.setState({
    //             aboutUsP: resp.data
    //         })
    //     })
    // }

   

    render() {
        return (
            <div>
                <>
                    {/*==================== fotter start =========================*/}
                    <footer>
                        <div className="container-fluid">
                            <div className="row" style={{ padding: 22, backgroundColor: '#6495ed' }}>
                                <div className='col-md-12'>
                                <p className='text-white pb-3 foter_para'>                      
                               All content available on our website, on hyperlinked websites, and on applications, forums, blogs, social media accounts and other platforms associated with DEXTools is intended solely to provide you with general information. We make no warranties of any kind with respect to our content, including, but not limited to, the accuracy and currency of the information. None of the content we provide should be construed as financial, legal or any other type of advice on which you may specifically rely for any purpose. Any use or reliance you place on our content is solely at your own risk. What you should do is conduct your own research, review and analysis, and verify our content before relying on it. Trading is a high-risk activity that can result in significant losses, so you should consult with your financial advisor before making any decisions. Nothing on our Site should be considered an invitation or offer to take any action.
                            </p>

                                </div>
                                <div className="col-md-6">
                                    <h6 className="foter_txt text-white">  info@swaprex.com </h6>
                                </div>
                                <div className="col-md-6">
                                    <div className="foter_middle">
                                        {this.state.socialLink.map((item, index) =>(
                                            <div>
                                                <Link key={item.id} to="#" className="socialink text-white"> <i style={{fontSize:20}} className={`${item.logo}`} aria-hidden="true" /></Link>
                                            </div>
                                        ))}
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


// <div className="col-md-4">
//                                     <div className="foter_rigt d-flex ">
//                                 {this.state.aboutUsP.map((item, index) => (
//                                          <p onClick={() => this.handlePage(item)} className="text-white after_line">{item.title}</p>
//                                         <Link className="text-white after_line" to={{ pathname:'/AboutUs', state:item }}>{item.title}</Link>
//                                             ))}
//                                         { <a className="text-white" href>Terms &amp; Conditions</a>
//                                         <a className="text-white" href>Terms &amp; Conditions</a> }
//                                     </div>
//                                 </div>