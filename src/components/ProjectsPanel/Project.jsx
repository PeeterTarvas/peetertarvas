import React, { useState } from "react";
import './Project.css'
import {Technology} from "../Tech/Technology";


export class Project extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            name: props.name,
            languages: props.languages,
            technologies: props.technologies,
            shortDescription: props.shortDescription,
            link: props.link,
            secondLink: props.secondLink

        }

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        this.setState({isToggled: !this.state.isToggled})
    }

    render() {
        return (
            <div className='project-container'>
                {this.state.isToggled ? (
                    <ul id={"list"}>
                        <li>{this.props.name}</li>
                        <li>{this.props.language}</li>
                        <li>{this.props.shortDescription}</li>
                        <li>{this.props.technologies}</li>
                        <li><a href={this.props.link}>Link to projects main page</a></li>
                        <li><a href={this.props.secondLink}>Link to projects repo</a></li>
                    </ul>
                    ): (
                    <div>{this.props.name}</div>
                )}
                <div onClick={(e) => this.togglePanel(e)}
                     className={'button'}>{(this.state.isToggled ? ("show less"): ("show more"))}</div>
            </div>
                )

}
}