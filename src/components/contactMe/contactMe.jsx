import React, {FormEvent, useRef, useState} from "react";
import './contactME.css'
import axios from "axios";
import  { ReCAPTCHA } from 'react-google-recaptcha'


export class ContactMe extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            messageSent: '',
            messageSentSuccessfully: true,
            formSparkURL:`https://submit-form.com/xl8atvh8`,
            message: '',
            name: '',
            email: '',
            subject: '',
            //recaptchaKey: '6LemB9obAAAAACgnxVA3faF62eWBYSbIXlAftt8o',
            //recaptchaRef: useRef<ReCAPTCHA>(null),
            //recaptchaToken: '',

        }
        this.submitForm = this.submitForm.bind(this)
        this.postSubmission = this.postSubmission.bind(this)
        this.updateRecaptchaToken = this.updateRecaptchaToken.bind(this)
    }


    async submitForm(e: FormEvent) {
        e.preventDefault();
        await this.postSubmission().then(
            () => {
                this.resetForm()
                //this.state.recaptchaRef.current.reset();
            })
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    updateRecaptchaToken(token: string | null) {
        this.setState({recaptchaToken: token})
    }


    async postSubmission() {
        const payload = {
            message: `Name: ${this.state.name}\n Email: ${this.state.email}\n Subject: ${this.state.subject}\n Message: ${this.state.message} `,
            //'g-recaptcha-response': this.state.recaptchaToken
        }
        try {
            const result = await axios.post(this.state.formSparkURL, payload);
            this.setState({
                messageSent: 'Your message has been sent! :)',
                messageSentSuccessfully: true,
            })
        } catch (error) {
            console.log(error.log)
            this.setState({
                messageSent: 'Oops there has been an error! Please contact Peeter via email and he will fix this problem!',
                messageSentSuccessfully: false,
            })
        }
    }

    resetForm() {
        this.setState({
            message: '',
            name: '',
            email: '',
            subject: '',
        })
    }

    render() {
        return (
            <div className={'contact-container'} id={'contact'}>
                <h1><span>Contact me</span></h1>
                <form className={'form'} onSubmit={this.submitForm}>
                    {
                        this.state.messageSent && (

                            this.state.messageSentSuccessfully ? (
                            <div className={'success-message'}>
                                {this.state.messageSent}
                            </div>
                            ) : (
                                <div className={'fail-message'}>
                                    {this.state.messageSent}
                                </div>
                            )
                        )
                    }
                    <div className={'contact-info'}>
                        <input
                            type={'text'}
                            id={'name-input'}
                            onChange={this.onNameChange.bind(this)}
                            required value={this.state.name}
                            placeholder={'Name'}
                        />
                        <input
                            type={'email'}
                            id={'email-input'}
                            onChange={this.onEmailChange.bind(this)}
                            required value={this.state.email}
                            placeholder={'Email'}
                        />
                            <input
                                type={'text'}
                                id={'subject-input'}
                                onChange={this.onSubjectChange.bind(this)}
                                required value={this.state.email}
                                placeholder={'Subject'}
                            />

                            <textarea
                                placeholder={'Message'}
                                id={'message-input'}
                                onChange={this.onMessageChange.bind(this)}
                                required value={this.state.message}
                                cols={50}

                            />
                        </div>


                        <button onClick={this.submitForm.bind(this)} className={'button'}>Send</button>
                </form>
            </div>
        )
    }
}

/**
 * <!--
 <ReCAPTCHA ref={this.state.recaptchaRef}

 sitekey={this.state.recaptchaKey}
 onChange={this.updateRecaptchaToken}
 size={'invisible'}

 /> -->
 */