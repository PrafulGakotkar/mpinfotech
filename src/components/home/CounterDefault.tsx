import CountUpContent from "@/utils/CountUpContent";
import React from "react";
const CounterDefault = () => {
    const counters = [
        {
            countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 569,
            countTitle: 'Projct Complate'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 356,
            countTitle: 'Happy Clients'
        },
        {
            countIcon: 'fas fa-users',
            countIconPrefix: 'fas',
            countNum: 783,
            countTitle: 'Business Partners'
        },
        {
            countIcon: 'fas fa-trophy',
            countIconPrefix: 'fas',
            countNum: 894,
            countTitle: 'IT Consultant'
        }

    ];

    return (
        <div className="counter-area pt-50 pb-50" style={{ background: "url(assets/img/bg/bg-3.jpg)" }}>
            <div className="container">
                <div className="home-title" /*style={{fontSize:" 30px", marginLeft: "28rem",color: "bisque"}}*/>Industry Breach Facts</div>
                <div className="row turon-counter-content">

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                {/* <i className="fas fa-check-square"></i> */}
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                    <CountUpContent number={3.86} text="" />
                                </span><span className="plus-icon">Mil $</span></h1>
                                <p>AVERAGE COST OF BREACH</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                {/* <i className="fas fa-check-square"></i> */}
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                    <CountUpContent number={207} text="" />
                                </span><span className="plus-icon">Days</span></h1>
                                <p>AVERAGE TIME TO DETECT</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                {/* <i className="fas fa-check-square"></i> */}
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                    <CountUpContent number={280} text="" />
                                </span><span className="plus-icon">Days</span></h1>
                                <p>AVERAGE TIME TO DETECT AND CONTAIN</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                {/* <i className="fas fa-check-square"></i> */}
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                    <CountUpContent number={58} text="" />
                                </span><span className="plus-icon">%</span></h1>
                                <p>PERSONAL DATA INVOLVED</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                {/* <i className="fas fa-check-square"></i> */}
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                    <CountUpContent number={65} text="" />
                                </span><span className="plus-icon">%</span></h1>
                                <p>AVERAGE COST OF BREACH</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="container">
                {counters &&
                <div className="row turon-counter-content">
                    {counters.map( (item, num) => (
                    <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="counter-wrapper mb-30">
                            <div className="counter-icon">
                                <i className={item.countIcon}></i>
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title"><span className="counter">
                                <CountUpContent number={item.countNum} text="" />
                                </span><span className="plus-icon">+</span></h1>
                                <p>{item.countTitle}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div> */}
        </div>
    )
}
export default CounterDefault;