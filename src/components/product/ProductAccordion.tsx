"use client"
import { faqData } from '@/data/prod-data';
import React,{useState} from 'react';

const ProductAccordion = () => {
    const [activeItem, setActiveItem] = useState<number>(0);
    const [active, setactive] = useState<boolean>(true);
    const handleAccordionClick = (id: number) => {
      setActiveItem(id);
      setactive(!active);
    };
    return (
        <>
            <div
                  className="accodion-style--1"
                  id="accordionExample"
                >
                  <div className="accodion-style--1" data-wow-delay=".5s">
                    <div>
                      {faqData?.map((item) => (
                        <div key={item.id} className="accordion-item">
                          <p
                            onClick={() => handleAccordionClick(item.id)}
                            className="accordion-header"
                          >
                            <button
                            style={{fontSize:20, fontWeight:600}}
                              className={`accordion-button-custome ${
                                activeItem === item.id && active
                                  ? "collapsed"
                                  : " "
                              }`}
                              type="button"
                            >
                              {item.title}
                            </button>
                          </p>
                          <div
                            className={`accordion-collapse collapse ${
                              activeItem === item.id && active ? "show" : " "
                            }`}
                          >
                            <div className="accordion-body">
                              <p style={{lineHeight:"20px"}}> {item.details} </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
        </>
    );
};

export default ProductAccordion;