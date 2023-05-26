import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

export function Contact() {
    const [formData, setFormData] = useState({ 
        name : {
            value: "",
            error: {
                exist : null,
                message : ""
            }
        },
        email : {
            value: "",
            error: {
                exist : null,
                message : ""
            }
        },
        subject : {
            value: "",
            error: {
                exist : null,
                message : ""
            }
        },
        message : {
            value: "",
            error: {
                exist : null,
                message : ""
            }
        }
    });

    const insertData = (e) => {
        let inputTarget = e.target.name;
        let dataInserted = e.target.value;

        switch (inputTarget) {
            case 'name':                
                setFormData((prevFormData) => ({
                    ...prevFormData, name : {
                        ...prevFormData.name,
                        value: dataInserted                        
                    }
                }));
            break;
            
            case 'email':                
                setFormData((prevFormData) => ({
                    ...prevFormData, email : {
                        ...prevFormData.email,
                        value: dataInserted                        
                    }
                }));
            break;
            
            case 'subject':                
                setFormData((prevFormData) => ({
                    ...prevFormData, subject : {
                        ...prevFormData.subject,
                        value: dataInserted
                    }
                }));
            break;
            
            case 'message':                
                setFormData((prevFormData) => ({
                    ...prevFormData, message : {
                        ...prevFormData.message,
                        value: dataInserted
                    }
                }));
            break;

            default:
        }        
    };

    const verifyName = () => {
        let dataInserted = formData.name.value;
        let existError = null;
        let messageError;
        
        if(dataInserted === ""){
            existError = true;
            messageError = 'This field cannot be empty.';
        }else{
            existError = false;
            messageError = '';
        }
        
        setFormData((prevFormData) => ({
            ...prevFormData, name : {
                ...prevFormData.name,
                error: {
                    ...prevFormData.name.error,
                    exist: existError,
                    message: messageError
                }
            },
        })); 

        return existError;
    }

    const verifyEmail = () => {
        let dataInserted = formData.email.value;
        let existError = null;
        let messageError;

        let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(dataInserted === ""){
            existError = true;
            messageError = 'This field cannot be empty.';
        }else if (!regex.test(dataInserted)){
            existError = true;
            messageError = 'This e-mail format is not correct. Example: username@domain.com';
        }else{
            existError = false;
            messageError = '';
        }

        setFormData((prevFormData) => ({
            ...prevFormData, email : {
                ...prevFormData.email,
                error: {
                    ...prevFormData.email.error,
                    exist: existError,
                    message: messageError
                }
                
            },
        }));

        return existError;
    }
    
    const verifySubject = () => {
        let dataInserted = formData.subject.value;
        let existError = null;
        let messageError;

        if(dataInserted === ""){
            existError = true;
            messageError = 'This field cannot be empty.';
        }else{
            existError = false;
            messageError = '';
        }

        setFormData((prevFormData) => ({
            ...prevFormData, subject : {
                ...prevFormData.subject,
                error: {
                    ...prevFormData.subject.error,
                    exist: existError,
                    message: messageError
                }
                
            },
        }));

        return existError;
    }

    const verifyMessage = () => {
        let dataInserted = formData.message.value;
        let existError = null;
        let messageError;

        if(dataInserted === ""){
            existError = true;
            messageError = 'This field cannot be empty.';
        }else{
            existError = false;
            messageError = '';
        }

        setFormData((prevFormData) => ({
            ...prevFormData, message : {
                ...prevFormData.message,
                error: {
                    ...prevFormData.message.error,
                    exist: existError,
                    message: messageError
                }
                
            },
        }));

        return existError;
    }

    const verifyInputs = () => { // Verifies that all inputs are ok to send it
        if(!verifyName()){
            if(!verifyEmail()){
                if(!verifySubject()){
                    if(!verifyMessage()){
                        return true; // all verified, OK
                    }else{
                        return false; // exists errors, not OK
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    };

    const [submitValue, setSubmitValue] = useState({ // State of the form input
        message: "Send", 
        icon: <FontAwesomeIcon icon="fa-solid fa-paper-plane" />, 
        class: "form-waiting"
    }); 

    const sendEmail = async () => {
        let siteUrl = "http://192.168.1.36:3000";
        let details = {
            name: formData.name.value,
            email: formData.email.value,
            subject: formData.subject.value,
            message: formData.message.value,
        };
        
        let response = await fetch(siteUrl + '/contact', { //Send email
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        if(!response.ok){
            throw new Error ('HTTP Error');
        }

        return await response.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        
        setSubmitValue({ // Showing that the process starts
            message: "Sending...", 
            icon: <FontAwesomeIcon icon="fa-solid fa-spinner fa-spin" />,
            class: "form-process"
        });
            
        if(verifyInputs()){
            try{
                result = await sendEmail();
                if(result.status){
                    setSubmitValue({
                        message: result.message, 
                        icon: <FontAwesomeIcon icon="fa-solid fa-check" />, 
                        class: "form-success"
                    });
                    
                    setTimeout(() => {
                        setSubmitValue({
                            message: "Send", 
                            icon: <FontAwesomeIcon icon="fa-solid fa-paper-plane" />, 
                            class: "form-waiting"
                        })
                    }, 5000);
                }else{
                    setSubmitValue({
                        message: result.message, 
                        icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />, 
                        class: "form-error"
                    });
                }
            }catch(error){
                result = undefined;
                setSubmitValue({
                    message: "Can't connect with server...", 
                    icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />, 
                    class: "form-error"
                });
            }
        }else{
            setSubmitValue({
                message: "Check errors and try again.", 
                icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />, 
                class: "form-error"
            });
        }
    };

    return (
        <section id="contact-container" className='component'>
            <h2 className='magic-background-underline load-animation-element'>Contact</h2>
            <article id="contact-wrapper">
                <aside id="contact-links">
                    <ul>
                        <li className='load-animation-element'>
                            <a href="mailto:Allan.esib@gmail.com" id="button-hire-me" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                                </span>
                                <span>
                                    Email
                                </span>    
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="tel:+34615460628" id="button-hire-me" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-solid fa-phone"/>
                                </span>
                                <span>
                                    Phone
                                </span>    
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="https://www.linkedin.com/in/AllanEspinozaIbanez" rel="nofollow noopener noreferrer" target="_blank" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in"/>
                                    
                                </span>
                                <span>
                                    Linkedin
                                </span>    
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="https://github.com/Alllxn" rel="nofollow noopener noreferrer" target="_blank" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-brands fa-github"/>
                                </span>
                                <span>
                                    Github
                                </span>    
                            </a>
                        </li>
                    </ul>
                </aside>
                <form id="form-contact" onSubmit={handleSubmit}>
                    <div id="form-contact-data" className="form-contact-part">
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.name.error.exist ? '#F44336' : ''}}> 
                                <FontAwesomeIcon icon="fa-solid fa-user-astronaut" size='xl' />
                            </span>
                            <input 
                                placeholder="Full name*"
                                name="name"
                                type="text" 
                                className='card load-animation-element'
                                onChange={(e) => insertData(e)}
                            />
                            {formData.name.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {formData.name.error.message}
                                </span>
                            )}
                        </label>
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.email.error.exist ? '#F44336' : ''}}> 
                                <FontAwesomeIcon icon="fa-solid fa-envelope" size='xl' />
                            </span>
                            <input 
                                placeholder="Email*"
                                name="email"
                                type="text"
                                className="card load-animation-element"
                                maxLength="320"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.email.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {formData.email.error.message}
                                </span>
                            )}
                        </label>    
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.subject.error.exist ? '#F44336' : ''}}>
                                <FontAwesomeIcon icon="fa-solid fa-pen" size='xl'/>
                            </span>
                            <input 
                                placeholder="Subject*"
                                name="subject"
                                type="text" 
                                className="card load-animation-element"
                                maxLength="70"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.subject.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {formData.subject.error.message}
                                </span>
                            )}
                        </label>                
                    </div>
                    <div id="form-contact-message" className="form-contact-part">
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.message.error.exist ? '#F44336' : ''}}>
                                <FontAwesomeIcon icon="fa-solid fa-message" size='xl' />
                            </span>
                            <textarea 
                                name="message"
                                placeholder="Message*"
                                className="card load-animation-element"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.message.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {formData.message.error.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div id="form-contact-submit" className="form-contact-part load-animation-element">
                        <button type="submit" className="card button-cta">
                            <span className={submitValue.class}>
                                {submitValue.icon}
                            </span>
                            <span>
                                {submitValue.message}
                            </span>    
                        </button>
                    </div>
                </form>
            </article>
        </section>
    );
}

export default Contact;