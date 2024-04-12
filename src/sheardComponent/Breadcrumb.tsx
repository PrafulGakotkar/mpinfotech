import React from 'react';
import Link from 'next/link';

interface propsType{
    pageTitle:string
}

const Breadcrumb = ({pageTitle}:propsType) => {

  return (
      <div className="breadcrumb-area pt-40 pb-20" style={{ backgroundColor:"#003352"  }}>
       {/* <div className="breadcrumb-area pt-100 pb-100" style={{ background: "url(assets/img/bg/abstract-dark-blue-futuristic-digital-grid-background.jpg)" }}>  */}
      {/* <div className="breadcrumb-area pt-100 pb-100" style={{ background: "url(assets/img/bg/bg-14.jpg)" }}> */}
	    <div className="container">
	        <div className="row">
	            <div className="col-xl-12">
	                <div className="breadcrumb-text text-center">
						<h1>{ pageTitle ? pageTitle : 'Blog'}</h1>
	                    <ul className="breadcrumb-menu">
	                        <li><Link href="/" >Home</Link></li>
	                        <li><span>{ pageTitle ? pageTitle : 'Blog'}</span></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
  );
}

export default Breadcrumb;




