import React, { Component } from 'react';

class Footer extends Component {
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
                                        <a className="text-white after_line" href>Twitter </a>
                                        <a className="text-white after_line" href>Telegram</a>
                                        <a className="text-white" href>Medium</a>
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