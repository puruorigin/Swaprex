import React, { Component, Image } from 'react';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import GetApiCall from '../GetApi'
import { AppConfig } from '../Config/AppConfig'
import Notiflix from 'notiflix';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import moment from 'moment'
import SimpleImageSlider from "react-simple-image-slider";
import Mailchimp from 'react-mailchimp-form';
import RCG from 'react-captcha-generator';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button } from 'bootstrap';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: [],
            subsc: '',
            services: [],
            roadMap: [],
            owlCImg: [],
            ques: [],
            OurPartner: [],
            titleHead: [],
            buttonLink: [],
            showHide: true,
            imagesP: [],
            socialLink: [],
            sharing:[],
            btnDisable:true,
            captcha: '',
            EmailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            modalOpen: false
        }
        this.check = this.check.bind(this)
        this.result = this.result.bind(this)
        this.handleClick = this.handleClickCheck.bind(this)
    }

    componentDidMount() {
        // const script = document.createElement("script");
        // script.src = "/Asssets/js/owl.js"
        // script.async = true;
        // document.body.appendChild(script)
        this.getRoadMap()
        this.getOurPartner();
        this.getHeader();
        this.getButtonLink();
        this.getSomthing();
        this.getServices();
        this.getFaq();
        this.getHeader();
        this.getOurPartner();
        this.getSocialLink();
    }

    getHeader = () => {
        let url = `${AppConfig.AppUrl}header`
        fetch(url).then((resp) => resp.json()).then((res) => {
            this.setState({
                titleHead: res.data
            })
        })
    }

    getSocialLink = () => {
        let url = `${AppConfig.AppUrl}sharing`
        fetch(url).then((res) => res.json()).then((res) =>{
            console.log(res,"<social link")
            this.setState({
                sharing:res.data
            })
        })
    }

    getButtonLink = () => {
        let url = `${AppConfig.AppUrl}buttonlink`
        fetch(url).then((res) => res.json()).then((resp) => {
            // console.log(resp.data,"<--=====")
            this.setState({
                buttonLink: resp.data
            })
        })
    }

    getSomthing = () => {
        let url = `${AppConfig.AppUrl}feature`
        fetch(url).then((resp) => resp.json()).then((res) => {
            // console.log(res.data,"asdada===========")
            this.setState({
                features: res.data
            })
        })
    }

    getServices = () => {
        let url = `${AppConfig.AppUrl}services`
        fetch(url).then((res) => res.json()).then((resp) => {
            console.log(resp,"services=========")
            this.setState({
                services: resp.data
            })
        })
    }

    getRoadMap = () => {
        let url = `${AppConfig.AppUrl}roadmap`
        fetch(url).then((res) => res.json()).then((res) => {
            // console.log(res.data,"asdasd")
            this.setState({
                roadMap: res.data
            }, () => this.getOurPartner())
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
                ques: res.data
            })
        })
    }

    sizeText = (title) => {
        if (title.length < 20) {
            return title
        } else {
            var ti = title.slice(0, 20)
            return <h4>{`${ti}...`}</h4>
        }
    }

    handleInputChange = (event) => {
        this.setState({
            subsc: event.target.value
        })
        // console.log(event.target.value,"<=====")
        if (this.state.EmailRegex.test(event.target.value)) {
            this.setState({
                btnDisable: false
            })
        }
    }

    subscrib = () => {
        const { subsc } = this.state;
        // console.log(this.captchaEnter.value,"asdas")
        if (this.state.subsc != '') {
            if (this.state.EmailRegex.test(subsc)) {
                this.setState({
                    modalOpen: true
                })
            } else { Notiflix.Notify.Failure('Please enter correct email') }
        } else { Notiflix.Notify.Failure('Please enter captcha') }
    }

    getOurPartner = () => {
        let url = `${AppConfig.AppUrl}client`
        fetch(url).then((res) => res.json()).then((resp) => {
            // console.log(resp.data,"<====== our partner")
            let arr = []
            resp.data.forEach(a => {
                // console.log(a.image,"<====================")
                arr.push({ url: a.image })
            })
            // console.log(arr,"<===-----------")
            this.setState({
                imagesP: arr,
                OurPartner: resp.data
            })

        })
    }

    hideAndSeek = async (item) => {
        const { showHide } = this.state
        this.setState({
            showHide: !showHide
        })
        const { ques } = this.state;
        if (showHide) {
            ques.forEach(a => {
                if (item.id == a.id) {
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

    handleClickCheck(e){
        e.preventDefault();
        this.check()
    }

    result(text) {
        this.setState({
          captcha: text
        })
      }

    check() {
        const { subsc } = this.state;
        console.log(this.state.captcha, this.captchaEnter.value, this.state.captcha === this.captchaEnter.value)
        if(this.state.captcha === this.captchaEnter.value){
            let url = `${AppConfig.AppUrl}subscription?email_id=${subsc}`
                fetch(url).then((res) => res.json()).then((resp) => {
                    Notiflix.Notify.Success(resp.message)
                    window.location.reload()
                })
        } else {
            window.location.reload();
        }
        // if(this.state.captcha != this.captchaEnter.value){
        // //    window.location.reload();
        // }
      }


    render() {
        return (
            <div>
                <div className="container"  >
                    <Header></Header>
                    {/*=========================== banner part ====================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="banner txt">
                                    <div className="banner_descrp">
                                        {this.state.titleHead.map((item, index) => (
                                            <h2>
                                                {item.title}
                                            </h2>
                                        ))}
                                    </div>

                                </div>
                                <Router>
                                    <div className="social_" style={{ marginTop: 30 }}>
                                        {this.state.sharing.map((item, index) =>(
                                                <Link key={item.id} to="#" className="socialink text-primary"> <i className={`${item.logo}`} aria-hidden="true" /></Link>
                                        ))}
                                    </div>
                                    <div className="social_ mt-4">
                                        {this.state.buttonLink.map((item, index) => (
                                            <div>
                                                <Link className="btn btn_started" onClick={() => window.open(item.menu_url)}>{item.menu_title}</Link>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="social_ mt-4">
                                        <input className="input_mail" type="email" placeholder="your email address"
                                            value={this.state.subsc}
                                            onChange={this.handleInputChange}
                                            name />
                                        <button 
                                        // disabled={this.state.btnDisable}
                                         onClick={this.subscrib.bind(this)} className="btn nav_btn">subscribe</button>
                                        <Modal open={this.state.modalOpen} class="modal-content ">
                                            <div style={{ height: 200, width: 400}}>
                                                <div className='captcha'>
                                                    <RCG style={this.display} result={this.result} />
                                                    <form className="social_  capt_ " onSubmit={this.handleClick}>
                                                        <input type='text' className="input_mail" ref={ref => this.captchaEnter = ref} />
                                                        <input className="btn nav_btn capbtn_" type='submit' placeholder="Captcha" />
                                                    </form>
                                                </div>
                                            </div>
                                        </Modal>
                                        {/* <Mailchimp className="social_mailchip mt-4"
                                            action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
                                            fields={[
                                                {
                                                    name: 'EMAIL',
                                                    placeholder: 'your email address',
                                                    type: 'email',
                                                    required: true
                                                }
                                            ]}
                                        /> */}
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
                    {/*======================== our features start =================================== */}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Our Features</h1>
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row">
                                {this.state.features.map((item, index) => (
                                    <div key={item.id} className="col-md-4">
                                        <div key={item.id} className="box" style={{ height: 180 }}>
                                            {item.image == null && (
                                                <div></div>
                                            )}
                                            {item.image != null && (
                                                <div className="box_img">
                                                    <img style={{ height: 300 }} class="img-fluid" src={item.image} />
                                                </div>
                                            )}
                                            <div className="box_title">
                                                <h3 style={{ textAlign: 'center' }}>{this.sizeText(item.title)}</h3>
                                                <p style={{ textAlign: 'center' }}>{item.description}</p>
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
                                    <h1>What Can Swaprex Do ?</h1>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                {this.state.services.map((item, index) => (
                                    <div key={item.id} className="col-sm-6 mt-3">
                                        <div className="row">
                                            {item.image == null && (
                                                <div className="col-sm-2">
                                                    <div className="icon_fa">
                                                        <i class={`${item.title} text-danger`} aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            )}
                                            {item.image != null && (
                                                <div className="col-sm-2">
                                                    <div className="img_txt">
                                                        <img style={{ height: 280 }} class="img-fluid" src={item.image} />
                                                    </div>
                                                </div>
                                            )}
                                            <div className="col-sm-10">
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
                                    <div key={item.id} className="roadmap-timeline-list alt">
                                        <div className="rm-date"><span>{moment(item.date).format('MMMM-YYYY')}</span></div>
                                        <div className="rm-infos" >
                                            <div className="img_txt mb-3">
                                                <i  className={`${item.image} text-danger`} aria-hidden="true"></i>
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
                                                <button onClick={() => this.hideAndSeek(item)} className="btn faq_btn btn-link" aria-expanded="true" aria-controls="collapseOne">
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
                    {/*=================== our partner end ===========================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>Our Partner &amp; Supporters</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-12 col-xs-12 d-flex justify-content-center">
                    <OwlCarousel responsive={{
                        0: { items: 1 },
                        400: { items: 1 },
                        599: { items: 2 },
                        1024: { items: 4 },
                        1170: { items: 4 }
                    }} loop>
                        {this.state.OurPartner.map((item, index) => (
                            <div className="roadmap-timeline-list alt">
                                <div className="rm-infos" style={{ width: 300, height: 150 }}>
                                    <div className="img_txt">
                                        <Router>
                                            <Link onClick={() => window.open(item.url)}> <img style={{ width: '100%' }} src={item.image} class="img-fluid" /> </Link>
                                        </Router>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}


export default Dashboard;

// "homepage": "http://gowebdesign.in/swaprex_r/",