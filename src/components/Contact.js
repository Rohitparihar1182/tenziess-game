import React from 'react';
import './Contact.css';

function Contact() {
    const [style, setStyle] = React.useState({})
    const [reviewObj, setReviewObj]=React.useState({
        name:'',
        email:'',
        review:''
    });
    
    function handleChange(e){
        const {value, name}=e.target
        setReviewObj(prevState=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    React.useEffect(()=>{
        if(reviewObj.review==="") {
            setStyle({})
        }
        else{
            setStyle({
                color: '#e91e63',
                fontSize: '13px',
                transform: 'translateY(-20px)'
            }) 
        }    
    },[reviewObj])

    function submitReview(e){
        e.preventDefault()
        setReviewObj({
            name:'',
            email:'',
            review:''
        })
        alert('Thanks for your feedback, have a good day')
    }

    return ( 
        <section className="contact">
        <div className="contact--content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias error pariatur amet ducimus voluptates. Fugiat velit sit enim dolorem.</p>
        </div>
        <div className="contact--container">
            <div className="contactInfo">
                <div className="contact--box">
                <div className="contact--icon">
                    <i className="fa fa-map-marker" />
                </div>
                <div className="contact--text">
                    <h3>Address</h3>
                    <p>Bageshwar, <br />Uttarakhand, India,<br /> 263639</p>
                </div>
                </div>
                <div className="contact--box">
                <div className="contact--icon">
                    <i className="fa fa-phone" />
                </div>
                <div className="contact--text">
                    <h3>Phone</h3>
                    <p>78305 58297</p>
                </div>
                </div>
                <div className="contact--box">
                <div className="contact--icon">
                    <i className="fa fa-envelope-o" />
                </div>
                <div className="contact--text">
                    <h3>Email</h3>
                    <p>rohitsinghparihar78384@gmail.com</p>
                </div>
                </div>
            </div>
            <div className="contactForm">
                <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input 
                        type="text"  
                        name="name" 
                        required 
                        value={reviewObj.name}
                        onChange={handleChange}
                    />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input 
                        type="text" 
                        name='email' 
                        value={reviewObj.email}
                        required 
                        onChange={handleChange}
                    />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea 
                        name='review'
                        value={reviewObj.review}
                        onChange={handleChange}
                    />
                    <span style={style}>Type your message ...</span>
                </div>
                <div className="inputBox">
                    <button className="contact--btn" onClick={submitReview}>Submit</button>
                </div>
                </form>
            </div>
        </div>
      </section>
    );
}

export default Contact;