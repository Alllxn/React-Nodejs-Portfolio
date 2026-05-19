import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { useLanguage } from '../../context/LanguageContext';

export function Contact() {
    const { t } = useLanguage();
    const f = t.contact.form;

    const [formData, setFormData] = useState({
        name : { value: "", error: { exist: null, key: "" } },
        email : { value: "", error: { exist: null, key: "" } },
        subject : { value: "", error: { exist: null, key: "" } },
        message : { value: "", error: { exist: null, key: "" } },
    });

    const insertData = (e) => {
        let inputTarget = e.target.name;
        let dataInserted = e.target.value;

        setFormData((prev) => ({
            ...prev,
            [inputTarget]: { ...prev[inputTarget], value: dataInserted }
        }));
    };

    const setError = (field, key) =>
        setFormData((prev) => ({
            ...prev,
            [field]: { ...prev[field], error: { exist: !!key, key } }
        }));

    const verifyName = () => {
        const empty = formData.name.value === "";
        setError('name', empty ? 'empty' : '');
        return empty;
    };

    const verifyEmail = () => {
        const val = formData.email.value;
        const regex = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        let key = '';
        if (val === '') key = 'empty';
        else if (!regex.test(val)) key = 'invalidEmail';
        setError('email', key);
        return !!key;
    };

    const verifySubject = () => {
        const empty = formData.subject.value === "";
        setError('subject', empty ? 'empty' : '');
        return empty;
    };

    const verifyMessage = () => {
        const empty = formData.message.value === "";
        setError('message', empty ? 'empty' : '');
        return empty;
    };

    const verifyInputs = () =>
        !verifyName() && !verifyEmail() && !verifySubject() && !verifyMessage();

    // submitStatus: 'waiting' | 'sending' | 'success' | 'check-errors' | 'server-error'
    const [submitStatus, setSubmitStatus] = useState('waiting');
    const [serverMessage, setServerMessage] = useState('');

    const submitDisplay = {
        waiting:       { message: f.send,        icon: <FontAwesomeIcon icon="fa-solid fa-paper-plane" />,   class: "form-waiting" },
        sending:       { message: f.sending,      icon: <FontAwesomeIcon icon="fa-solid fa-spinner fa-spin" />, class: "form-process" },
        success:       { message: serverMessage,  icon: <FontAwesomeIcon icon="fa-solid fa-check" />,          class: "form-success" },
        'check-errors':{ message: f.checkErrors,  icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />,          class: "form-error" },
        'server-error':{ message: f.serverError,  icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />,          class: "form-error" },
        error:         { message: serverMessage,  icon: <FontAwesomeIcon icon="fa-solid fa-xmark" />,          class: "form-error" },
    }[submitStatus];

    const sendEmail = async () => {
        let details = {
            name: formData.name.value,
            email: formData.email.value,
            subject: formData.subject.value,
            message: formData.message.value,
        };

        let response = await fetch(`${process.env.REACT_APP_API_URL || ''}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(details),
        });

        if (!response.ok) throw new Error('HTTP Error');
        return await response.json();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('sending');

        if (verifyInputs()) {
            try {
                const result = await sendEmail();
                setServerMessage(result.message);
                if (result.status) {
                    setSubmitStatus('success');
                    setTimeout(() => setSubmitStatus('waiting'), 5000);
                } else {
                    setSubmitStatus('error');
                }
            } catch {
                setSubmitStatus('server-error');
            }
        } else {
            setSubmitStatus('check-errors');
        }
    };

    return (
        <section id="contact-container" className='component'>
            <h2 className='magic-background-underline load-animation-element'>{t.contact.title}</h2>
            <article id="contact-wrapper">
                <aside id="contact-links">
                    <ul>
                        <li className='load-animation-element'>
                            <a href="mailto:contact@allandev.es" id="button-hire-me" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                                </span>
                                <span>{t.contact.links.email}</span>
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="tel:+34628766431" id="button-hire-me" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-solid fa-phone"/>
                                </span>
                                <span>{t.contact.links.phone}</span>
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="https://www.linkedin.com/in/allanwebdev" rel="nofollow noopener noreferrer" target="_blank" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in"/>
                                </span>
                                <span>{t.contact.links.linkedin}</span>
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="https://wa.me/34628766431" rel="nofollow noopener noreferrer" target="_blank" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-brands fa-whatsapp"/>
                                </span>
                                <span>{t.contact.links.whatsapp}</span>
                            </a>
                        </li>
                        <li className='load-animation-element'>
                            <a href="https://github.com/Alllxn" rel="nofollow noopener noreferrer" target="_blank" className="button-cta card">
                                <span className="magic-background">
                                    <FontAwesomeIcon icon="fa-brands fa-github"/>
                                </span>
                                <span>{t.contact.links.github}</span>
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
                                placeholder={f.name}
                                name="name"
                                type="text"
                                className='card load-animation-element'
                                onChange={(e) => insertData(e)}
                            />
                            {formData.name.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {f[formData.name.error.key]}
                                </span>
                            )}
                        </label>
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.email.error.exist ? '#F44336' : ''}}>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" size='xl' />
                            </span>
                            <input
                                placeholder={f.email}
                                name="email"
                                type="text"
                                className="card load-animation-element"
                                maxLength="320"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.email.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {f[formData.email.error.key]}
                                </span>
                            )}
                        </label>
                        <label className="contact-field load-animation-element">
                            <span style={{color: formData.subject.error.exist ? '#F44336' : ''}}>
                                <FontAwesomeIcon icon="fa-solid fa-pen" size='xl'/>
                            </span>
                            <input
                                placeholder={f.subject}
                                name="subject"
                                type="text"
                                className="card load-animation-element"
                                maxLength="70"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.subject.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {f[formData.subject.error.key]}
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
                                placeholder={f.message}
                                className="card load-animation-element"
                                onChange={(e) => insertData(e)}
                            />
                            {formData.message.error.exist && (
                                <span className='input-error'>
                                    <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size='lg'/>
                                    {f[formData.message.error.key]}
                                </span>
                            )}
                        </label>
                    </div>
                    <div id="form-contact-submit" className="form-contact-part load-animation-element">
                        <button type="submit" className="card button-cta">
                            <span className={submitDisplay.class}>
                                {submitDisplay.icon}
                            </span>
                            <span>
                                {submitDisplay.message}
                            </span>
                        </button>
                    </div>
                </form>
            </article>
        </section>
    );
}

export default Contact;
