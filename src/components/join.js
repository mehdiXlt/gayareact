import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'


 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('Gmail', 'template_ktuzcds', form.current, 'user_kQTLNwDrcki75kcBBHXYc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div className='join section'>
        <h2 className="join__title">You Can <br />Join Us Now</h2>
        <div className='join__container'>
            <form className='input__container' ref={form} onSubmit={sendEmail}>

                <span className='input__title'>Name :</span>
                <input className='input__data' type='text' name='name'></input>

                <span className='input__title'>email :</span>
                <input className='input__data' type='email' name='email'></input>

                <span className='input__title'>Social media:</span>
                <input className='input__data' type='text' name='insta'></input>
                
                <input type='submit' value="Submit" className='sub__button'></input>
            </form>
        </div>

    </div>
  );
};

export default ContactUs