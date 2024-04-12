"use client"
import accordion_data1 from '@/data/cst-data';
import React, { useState } from 'react';

const CyberAccordion = () => {
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
            {accordion_data1?.map((item, i) => (
              <div key={i} className="accordion-item">
                <p
                  onClick={() => handleAccordionClick(i)}
                  className="accordion-header"
                >
                  <button
                    className={`accordion-button-custome ${activeItem === i && active
                      ? "collapsed"
                      : " "
                      }`}
                    type="button"
                  >
                    {item.question}
                  </button>
                </p>
                <div
                  className={`accordion-collapse collapse ${activeItem === i && active ? "show" : " "
                    }`}
                >
                  <div className="accordion-body"><br/>
                    <h6>{item.answer.title}</h6><br/>
                    <h6>{item.answer.heading}</h6>
                    <ul>
                      {item.answer.paragraph.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                    </ul><br/>
                    <h6>{item.answer.subheading}</h6>
                    <ul>
                      {item.answer.list.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                    </ul><br/>
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

export default CyberAccordion;
