import React from "react";
import thumbOne from "../../../public/assets/img/product/Data-Protection.png";
import thumbTwo from "../../../public/assets/img/product/Cloud hosting-cuate.png";
// import thumbTwo from "../../../public/assets/img/product/businessman.jpg";
import Image from "next/image";
const ItManagement = () => {
  return (
    <>
      <div
        className="it-management-area pt-100 pb-80"
        style={{ background: "url(assets/img/bg/bg-16.jpg)" }}
      >
        <div className="container">
          <div className="row pb-60">
          <h1 className="text-white pb-30 text-center">
                    Features
                  </h1>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-img">
                <Image
                  src={thumbOne}
                  alt="it-img"
                  style={{ width: "100%", height: "auto" }}
                 
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-wrapper">
                <div className="it-management-text">
                 
                  <span>
                    Security & Governance
                  </span>
                  <p>
                    Define, Govern and measure the compliance of our customer’s clouds in a unified way. Cloud governance is a framework that guides how end users make use of cloud services by defining and creating policies to control costs, minimize security risks, improve efficiency, and accelerate deployment.

                  </p><br /><br />
                  <span>
                    Cost Management
                  </span>
                  <p>
                    The need to focus on the efficient use of cloud services brings financial benefits; with a tool like MRADAR, most organizations are likely to spend their money wisely. Maximizing the value of the cloud requires a tight collaboration among the disciplines of governance, architecture, operations, product management, finance, and application development. Correlating cloud costs to business KPIs allows organizations to manage spending with respect to its return on investment (ROI).


                  </p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="row">
            
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-wrapper">
                <div className="it-management-text">
                  <span>
                  Cloud operations management
                  </span>
                  <p>
                  The dashboard helps Cloud operations teams have a real-time view of activities and actionable alerts from multiple cloud providers. It enables the teams to mitigate them in a timely manner, thereby reducing the risk to the cloud infrastructure. Cloud operations will also have a view of the real-time asset dashboards.

                  </p><br /><br />
                  <span>
                  Reporting
                  </span>
                  <p>
                  The dashboard helps Cloud operations teams have a real-time view of activities and actionable alerts from multiple cloud providers. It enables the teams to mitigate them in a timely manner, thereby reducing the risk to the cloud infrastructure. Cloud operations will also have a view of the real-time asset dashboards.

                  

                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
              <div className="it-management-img service-img1">
                <Image className="service-img1"
                 style={{ width: "100%", height: "500px" }}
                  src={thumbTwo}
                  alt="it-img"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItManagement;
