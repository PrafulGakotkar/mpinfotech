import CountUpContent from "@/utils/CountUpContent";
import React from "react";
const CounterDefault1 = () => {

    const counters = [
        {
            // countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 1970,
            countTitle: 'HAPPY CLIENTS'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 491,
            countTitle: 'FINISHED PROJECTS'
        },
        {
            countIcon: 'fas fa-users',
            countIconPrefix: 'fas',
            countNum: 245,
            countTitle: 'EXPERTS'
        },
        {
            countIcon: 'fas fa-trophy',
            countIconPrefix: 'fas',
            countNum: 1090,
            countTitle: 'POSTS'
        }

    ];

    return (
        <div className="counter-area  pb-100" style={{ background: "url(assets/img/bg/bg-3.jpg)", paddingTop: 70 }}>
            <div className="container">
                {/* <div style={{ textAlign: "center", color: "wheat" }}>
                    <h5 style={{ textAlign: "center", color: "wheat" }}>WORLDWIDE PUBLIC CLOUD SERVICES SPENDING</h5>
                    <h1>Cloud spending</h1>
                    <h6 style={{paddingBottom:25}}>Worldwide Public Cloud Services spending</h6>
                </div> */}
                {counters &&
                    <div className="row turon-counter-content">
                        {counters.map((item, num) => (
                            <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="counter-wrapper mb-30">
                                    {/* <div className="counter-icon">
                                <i className={item.countIcon}></i>
                            </div> */}
                                    <div className="counter-text">
                                        <h1 className="counter-title"><span className="counter">
                                            <CountUpContent number={item.countNum} text="" />
                                        </span><span className="plus-icon"></span></h1>
                                        {/* </span><span className="plus-icon">Million $</span></h1> */}
                                        <p>{item.countTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
export default CounterDefault1;