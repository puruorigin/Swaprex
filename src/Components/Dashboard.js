import React, { Component, button } from 'react';
import Footer from './Footer';
import Header from './Header';
import OwlCarousel from 'react-owl-carousel';
import { BrowserRouter as Router,  Link } from 'react-router-dom'
// import GetApiCall from '../GetApi'
import {AppConfig} from '../Config/AppConfig'
import Notiflix from 'notiflix';

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            features:[],
            subsc:'',
            services:[],
            roadMap:[],
            owlCImg:[],
            ques:[],
            titleHead:[],
            showHide:true,
            EmailRegex :  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    }

    componentDidMount() {
        // const script = document.createElement("script");
        // script.src = "/Asssets/js/owl.js"
        // script.async = true;
        // document.body.appendChild(script)
        this.getSomthing();
        this.getServices();
        this.getRoadMap();
        this.getFaq();
        this.getHeader();
    }

    getHeader =()=>{
        let url= `${AppConfig.AppUrl}header`
        fetch(url).then((resp) => resp.json()).then((res) => {
            console.log(res.data[0].title,"hello")
            this.setState({
                titleHead:res.data
            })
        })
    }
    getSomthing = () => {
        let url = `${AppConfig.AppUrl}feature`
        fetch(url).then((resp) => resp.json()).then((res) => {
            // console.log(res.data,"asdada==============")
            this.setState({
                features: res.data
            })
        })
    }
    

    getServices = () => {
        let url = `${AppConfig.AppUrl}services`
        fetch(url).then((res) => res.json()).then((resp) => {
            this.setState({
                services:resp.data
            })
        })
    }

    getRoadMap = () =>{
        let url = `${AppConfig.AppUrl}roadmap`
        fetch(url).then((res) => res.json()).then((res) => {
            // console.log(res.data,"asdasd")
            this.setState({
                roadMap: res.data
            })
        })
    }

    getFaq = () => {
        let url = `${AppConfig.AppUrl}faq`
        fetch(url).then((resp) => resp.json()).then((res) => {
            // console.log(res.data,"<------------------")
            res.data.forEach(a => {
                a.check = false
            });
            // console.log(res.data,"asd")
            this.setState({
                ques:res.data
            })
        })
    }

    sizeText = (title) => {
        if(title.length<20) {
            return title
        } else {
            var ti = title.slice(0,20)
            return <h4>{`${ti}...`}</h4>
        }
    }

    handleInputChange =(event) =>{
        this.setState({
            subsc: event.target.value
        })
    }

    subscrib = () => {
        const {subsc} = this.state;
        if(this.state.EmailRegex.test(subsc)){
            let url = `${AppConfig.AppUrl}subscription?email_id=${subsc}`
            fetch(url).then((res)=> res.json()).then((resp) => {
                Notiflix.Notify.Success(resp.message)
                window.location.reload()
            })
        }else{Notiflix.Notify.Failure('Please enter correct email')}
    }


    hideAndSeek = (item) => {
        const {showHide} = this.state
        this.setState({
            showHide: !showHide
        })
        // console.log(this.state.showHide,"checkssssss")
        const {ques} = this.state;
        // console.log(services,"all services")
        // console.log(item,"<[-[[[[[[]====")
        if(showHide){
            ques.forEach(a => {
                if(item.id == a.id) {
                    a.check = true
                } else {
                    a.check = false
                }
            })
            this.setState({
                ques: ques
            })
        } else {
            ques.forEach(a => {
                    a.check = false
            })
            this.setState({
                ques: ques
            })
        }
    }
    

    render() {
        return (
            <div>
                <div className="container" onSubmit={(e) => {e.preventDefault()}} >
                    <Header></Header>
                    {/*=========================== banner part ====================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="banner txt">
                                    <div className="banner_descrp">
                                    {this.state.titleHead.map((item,index) => (
                                        <h2>
                                        {item.title}
                                        </h2>
                                    )
                                    )}
                                    </div>
                                </div>
                                <Router>
                                <div className="social_" style={{ marginTop: 30 }}>
                                    <Link to="#" className="socialink text-primary"> <i className="fa fa-paper-plane" aria-hidden="true" /></Link>
                                    <Link to="#" className="socialink text-primary"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                    <Link to="#" className="socialink text-primary"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                </div>
                                <div className="social_ mt-4">
                                    <Link className="btn btn_started" to="#">Launch App</Link>
                                    <Link className="btn btn_started" to="#">Forum</Link>
                                    <Link className="btn btn_started" to="#">Read Docs</Link>
                                </div>
                                <div className="social_ mt-4">
                                    <input className="input_mail" type="email" placeholder="your email address"
                                    value={this.state.subsc}
                                    onChange={this.handleInputChange}
                                    name />
                                    <button onClick={this.subscrib.bind(this)} className="btn nav_btn">subscribe</button>
                                </div>
                            </Router>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <div class="banner_img">
                                    {/* <img class="img-fluid" src="image/bannerimg.svg"> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*====================== banner part end ============================================*/}
                    {/*======================== our services start =================================== */}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Our Features</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row">
                            {this.state.features.map((item, index) => (
                                <div className="col-md-4 mt-3">
                                    <div key={item.id} className="box">
                                        <div className="box_img">
                                            <img style={{height:300}} class="img-fluid" src={item.image} />
                                        </div>
                                        <div className="box_title">
                                            <h4>{this.sizeText(item.title)}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </section>
                    </section>
                    {/*============================== our services end =================================*/}
                    {/*===================================== what can do =========================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>What Can Suprex Do ?</h1>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row">
                                {this.state.services.map((item, index) => (
                                <div className="col-sm-6 mt-3">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="img_txt">
                                                {/* <h1>1</h1> */}
                                                <img style={{height:280}} class="img-fluid" src={item.image}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="circle_box_title">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </section>
                    </section>
                    {/*==================== what can do end ============================================*/}
                    {/*===================== road map start ==================================*/}
                    <section className="secbody">
                        {/*section title*/}
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Roadmap</h1>
                                    <p>Our milestones we are going towards rapidly to achieve that</p>
                                </div>
                            </div>
                        </div>
                        {/*section title*/}
                        <div className="row text-center">
                            <OwlCarousel items={4} responsive={{
                                0: { items: 2 },
                                400: { items: 2 },
                                599: { items: 3 },
                                1024: { items: 4 },
                                1170: { items: 4 }
                            }} className=" js_road_map" margin={10} >
                                    {this.state.roadMap.map((item, index) => (
                                    <div className="roadmap-timeline-list alt">
                                        <div className="rm-date"><span>{item.date}</span></div>
                                        <div className="rm-infos">
                                            <div className="img_txt">
                                                <img style={{height:200}} src={item.image} class="img-fluid"/>
                                            </div>
                                            <div className="rm-heading">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="rm-details">
                                                {/* <ul>
                                                    <li><p>Our milestones we are going </p></li>
                                                    <li><p>Our milestones we are going </p></li>
                                                    <li><p>Our milestones we are going </p></li>
                                                </ul>*/}
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                            </OwlCarousel>
                        </div></section>
                    {/*=========================== road map end ==============================*/}
                    {/*================================= FAQ ===============================================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Frequently Ask Questions</h1>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div id="accordion">
                            {this.state.ques.map((item, index) => (
                            <div key={item.id} className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0 miku">
                                        <button onClick={() => this.hideAndSeek(item)} className="btn faq_btn btn-link"  aria-expanded="true" aria-controls="collapseOne">
                                            {item.title}
                                        </button>
                                    </h5>
                                </div>
                                {item.check == false && (
                                    <div></div>
                                )}
                                {item.check == true && (
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body para_">
                                       {item.description}
                                    </div>
                                </div>
                                )}
                            </div>
                            ))}
                            {/* <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn faq_btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How easy is it to build a website with SuperFarm ?
            </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body para_">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
                                </div>
                            </div> */}
                            {/* <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn faq_btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How easy is it to build a website with SuperFarm ?
            </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body para_">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
                                </div>
                            </div> */}
                        </div>
                        </section>
                    </section>
                    {/*====================================== FAQ end ======================================*/}
                    {/*============================ our partner===================================  */}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Our Partner &amp; Supporters</h1>
                                </div>
                            </div>
                            <div>
                                <img className="img-fluid" src="Asssets/image/logo.jpeg" />
                            </div>
                        </div>
                    </section>
                    {/*=================== our partner end ===========================*/}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}


export default Dashboard;