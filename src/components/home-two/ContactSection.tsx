
"use client"
import React, { FormEvent, ChangeEvent, useState } from "react";
import imgOne from "../../../public/assets/img/bg/map.png";
import Image from "next/image";

const ContactSection = () => {
  const [authKey, setAuthKey] = useState('add');
  const [response, setResponse] = useState(null);
  const [successMessage, setSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  type FormData = {
    [key: string]: string;
  };
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Invalid email');
      return;
    }

    const formDataObject = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObject.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://old.mpinfotech.com/api/enquiry', {
        method: 'POST',
        body: formDataObject,
      });

      const data = await response.json();
      setResponse(data);
      setSuccess('Your message submitted successfully!, we will contact soon!');
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to submit your message please try again! ');
      console.log('Failed to submit data.');
    }

    console.log("Form Data:", Object.fromEntries(formDataObject));
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (

    <>
      {successMessage ? ( // Conditional rendering based on the state
        <div className="success-message text-center mt-20">
          <p style={{ fontSize: 20 }}> {successMessage}</p>
          {/* <p style={{fontSize:20}}>Your message has been successfully submitted!, we will contact you soon!</p> */}
        </div>
      ) : (
        <div className="contact-2-area pt-130 pb-100 theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="contact-wrapper mb-30">
                  <div className="section-title section-title-white mb-25">
                    <h1>Contact Us</h1>
                  </div>
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="row">
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box user-icon mb-10">
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name Here"
                            type="text"
                          />
                          <span>
                            <i className="fas fa-user"> </i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box email-2-icon mb-10">
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            type="email"
                          />
                          <span>
                            <i className="fas fa-envelope"> </i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12 mb-35">
                        <div className="form-2-box sub-icon mb-10">
                          <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            type="text"
                          />
                          <span>
                            <i className="fas fa-chevron-down"> </i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12 mb-30">
                        <div className="form-2-box message-2-icon mb-10">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols={30}
                            rows={10}
                            placeholder="Message"
                            id="message"
                          ></textarea>
                          <span>
                            <i className="fas fa-pencil-alt"> </i>
                          </span>
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <button className="btn" type="submit">
                          <span className="btn-texts">
                            send message <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                        {successMessage && <p className="text-white h5">{successMessage}</p>}
                        {errorMessage && <p className="text-white h5">{errorMessage}</p>}
                      </div>
                    </div>
                    <p className="form-message"></p>
                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="map-img mb-30">
                  <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default ContactSection;






// "use client"
// import React, { FormEvent, ChangeEvent, useState } from "react";
// import imgOne from "../../../public/assets/img/bg/map.png";
// import Image from "next/image";

// const ContactSection = () => {

//   const [authKey, setAuthKey] = useState('add');
//   const [response, setResponse] = useState(null);
//   const [successMessage, setSuccessMessage] = useState<string>('');
//   const [errorMessage, setErrorMessage] = useState<string>('');


//   type FormData = {
//     [key: string]: string;
//   };
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validate email
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       console.log("Invalid email");
//       return;
//     }

//     const formDataObject = new FormData();
//     Object.keys(formData).forEach(key => {
//       formDataObject.append(key, formData[key]);
//     });

//     try {
//       // const response = await fetch('https://old.mpinfotech.com/api/getJobs', {
//       const response = await fetch('https://old.mpinfotech.com/api/enquiry', {
//         method: 'POST',
//         //   headers: {
//         //     'Content-Type': 'application/json',
//         //     'authKey':'add',
//         //   },
//         body: formDataObject,
//         //   body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       setResponse(data);
//       setSuccessMessage('Your message submitted successfully!, we will contact soon!');
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('Failed to submit your message please try again! ');
//       console.log('Failed to submit data.');
//     }


//     // Display form data in the console
//     console.log("Form Data:", Object.fromEntries(formDataObject));

//     // Now you can use formDataObject to submit the form data to an API endpoint or perform any other action

//     // Clear form after submission
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };



//   return (
//     <div className="contact-2-area pt-130 pb-100 theme-bg">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-7 col-lg-7">
//             <div className="contact-wrapper mb-30">
//               <div className="section-title section-title-white mb-25">
//                 <h1>Contact Us</h1>
//               </div>
//               {/* <form  id="contact-form"> */}
//               <form onSubmit={handleSubmit} id="contact-form">
//                 <div className="row">
//                   <div className="col-xl-6 mb-10">
//                     <div className="form-2-box user-icon mb-10">
//                       <input
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Full Name Here"
//                         type="text"
//                       />
//                       <span>
//                         <i className="fas fa-user"> </i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="col-xl-6 mb-10">
//                     <div className="form-2-box email-2-icon mb-10">
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email Address"
//                         type="email"
//                       />
//                       <span>
//                         <i className="fas fa-envelope"> </i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="col-xl-12 mb-35">
//                     <div className="form-2-box sub-icon mb-10">
//                       <input
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder="Subject"
//                         type="text"
//                       />
//                       <span>
//                         <i className="fas fa-chevron-down"> </i>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="col-xl-12 mb-30">
//                     <div className="form-2-box message-2-icon mb-10">
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         cols={30}
//                         rows={10}
//                         placeholder="Message"
//                         id="message"
//                       ></textarea>
//                       <span>
//                         <i className="fas fa-pencil-alt"> </i>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="col-xl-12">
//                     <button className="btn" type="submit">
//                       <span className="btn-texts">
//                         send message <i className="far fa-long-arrow-right"></i>
//                       </span>{" "}
//                       <span className="btn-border"></span>
//                     </button>
//                     {successMessage && <p className="text-white h5">{successMessage}</p>}
//                     {errorMessage && <p className="text-white h5">{errorMessage}</p>}
//                   </div>
//                 </div>
//                 <p className="form-message"></p>
//               </form>
//             </div>
//           </div>
//           <div className="col-xl-5 col-lg-5">
//             <div className="map-img mb-30">
//               <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;
