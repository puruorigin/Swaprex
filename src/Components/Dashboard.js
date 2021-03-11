import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import OwlCarousel from 'react-owl-carousel';

class Dashboard extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/Asssets/js/owl.js"
        script.async = true;
        document.body.appendChild(script)
    }

    render() {
        return (
            <div>

                <div className="container">
                    <Header></Header>

                    {/*=========================== banner part ====================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="banner txt">
                                    <div className="banner_descrp">
                                        <h2>
                                            Swaprex is a <span className="para_det">cross-chain DeFi protocol</span><br />
                that allows users to <span className="para_det"> deploy crypto and NFT farms
                  with no code required! </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="social_" style={{ marginTop: 30 }}>
                                    <a href="#" className="socialink text-primary"> <i className="fa fa-paper-plane" aria-hidden="true" /></a>
                                    <a href="#" className="socialink text-primary"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a href="#" className="socialink text-primary"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                </div>
                                <div className="social_ mt-4">
                                    <a className="btn btn_started" href="#">Launch App</a>
                                    <a className="btn btn_started" href="#">Forum</a>
                                    <a className="btn btn_started" href="#">Read Docs</a>
                                </div>
                                <div className="social_ mt-4">
                                    <input className="input_mail" type="email" placeholder="your email address" name />
                                    <a className="btn nav_btn" href="#">subscribe</a>
                                </div>
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
                                    <h1>
                                        Our Features
            </h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box">
                                        <div className="box_img">
                                            <div className="img_txt">
                                                <h1>A</h1>
                                            </div>
                                            {/* <img class="img-fluid" src="image/boximg.svg"> */}
                                        </div>
                                        <div className="box_title">
                                            <h4>Lorem Ipsum</h4>
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box">
                                        <div className="box_img">
                                            <div className="img_txt">
                                                <h1>B</h1>
                                            </div>
                                            {/* <img class="img-fluid" src="image/boximg.svg"> */}
                                        </div>
                                        <div className="box_title">
                                            <h4>Lorem Ipsum</h4>
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="box">
                                        <div className="box_img">
                                            <div className="img_txt">
                                                <h1>C</h1>
                                            </div>
                                            {/* <img class="img-fluid" src="image/boximg.svg"> */}
                                        </div>
                                        <div className="box_title">
                                            <h4>Lorem Ipsum</h4>
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                    {/*============================== our services end =================================*/}
                    {/*===================================== what can do =========================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>
                                        What Can Suprex Do ?
            </h1>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="img_txt">
                                                <h1>1</h1>
                                                {/* <img class="img-fluid" src="image/cando.svg"> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="circle_box_title">
                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="img_txt">
                                                <h1>2</h1>
                                                {/* <img class="img-fluid" src="image/cando.svg"> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="circle_box_title">
                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="secbody">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="img_txt">
                                                <h1>3</h1>
                                                {/* <img class="img-fluid" src="image/cando.svg"> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="circle_box_title">
                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="img_txt">
                                                <h1>4</h1>
                                                {/* <img class="img-fluid" src="image/cando.svg"> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="circle_box_title">
                                                <p>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <h1>
                                        Roadmap
            </h1>
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
                            }} className=" js_road_map " loop margin={10} >
                                <div className="">
                                    <div className="roadmap-timeline-list alt">
                                        <div className="rm-date"><span>September 2020</span></div>
                                        <div className="rm-infos">
                                            <div className="img_txt">
                                                <h1>A</h1>
                                            </div>
                                            <div className="rm-heading">
                                                <h4>Lorem Ipsum </h4>
                                            </div>
                                            <div className="rm-details">
                                                <ul>
                                                    <li><p>Our milestones we are going </p></li>
                                                    <li><p>Our milestones we are going </p></li>
                                                    <li><p>Our milestones we are going </p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </div></section>
                    {/*=========================== road map end ==============================*/}
                    {/*================================= FAQ ===============================================*/}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>
                                        Frequently Ask Questions
            </h1>
                                </div>
                            </div>
                        </div>
                        <section className="secbody">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn faq_btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What are the benefits of SuperFarm ?
                </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body para_">
                                            With SuperFarm , you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with:
                                            Light speed deployment on the most secure and stable cloud infrastructure available on the market.
                                            Scalability – pay for what you need today and add-on options as you grow.
                                            All of the bells and whistles of other enterprise CMS options but without the design limitations - this CMS simply lets you realize your creative visions.
                                            Amazing support backed by a team of Solodev pros – here when you need them.
              </div>
                                    </div>
                                </div>
                                <div className="card">
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
                                </div>
                                <div className="card">
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
                                </div>
                            </div>
                        </section>
                    </section>
                    {/*====================================== FAQ end ======================================*/}
                    {/*============================ our partner===================================  */}
                    <section className="secbody">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 ">
                                <div className="heading_">
                                    <h1>
                                        Our Partner &amp; Supporters
            </h1>
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