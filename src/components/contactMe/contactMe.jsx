import React, {FormEvent, useState} from "react";
import './contactME.css'
import axios from "axios";

export class ContactMe extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            formSparkURL:`https://submit-form.com/xl8atvh8`,
            message: '',
            name: '',
            email: '',
            subject: '',

        }
        this.submitForm = this.submitForm.bind(this)
        this.postSubmission = this.postSubmission.bind(this)
    }


    async submitForm(e: FormEvent) {
        e.preventDefault();
        await this.postSubmission().then(
            () => {this.resetForm()})
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


    async postSubmission() {
        const payload = {
            message: `Name: ${this.state.name}\n Email: ${this.state.email}\n Subject: ${this.state.subject}\n Message: ${this.state.message} `
        }
        try {
            const result = await axios.post(this.state.formSparkURL, payload);
        } catch (error) {
            console.log(error)
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
            <div className={'contact-container'}>
                <h1><span>Contact me</span></h1>
                <form className={'form'} onSubmit={this.submitForm}>
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
                        <div className={"form-group"}>
                            <input
                                type={'text'}
                                id={'subject-input'}
                                onChange={this.onSubjectChange.bind(this)}
                                required value={this.state.email}
                                placeholder={'Subject'}
                            />
                            <textarea
                                placeholder={'Message'}
                                id={'message'}
                                onChange={this.onMessageChange.bind(this)}
                                required value={this.state.message}

                            />
                        </div>


                    </div>
                    <button onClick={this.submitForm.bind(this)} className={'button'}>Submit</button>
                </form>
            </div>
        )
    }
}