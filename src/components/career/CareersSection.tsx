"use client"
import { useEffect } from 'react';

const CareersArea = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
    script.async = true;
    script.setAttribute('data-ceipal-api-key', 'cGk5SkhsQXhHSUduYTFCYWRLU3dRZz09');
    script.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09');
    
    const container = document.getElementById('example-widget-container');
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    container.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <section className="brand-area pb-120 pt-80">
        <div className="container">
          <h2 className="tp-brand-title text-center">Current <span style={{color:'#3C72FC'}}>Openings</span></h2>
          <div id="example-widget-container"></div>
        </div>
      </section>
    </>
  );
};

export default CareersArea;
