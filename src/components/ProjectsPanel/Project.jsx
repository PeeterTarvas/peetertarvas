import './Project.css'
import React from "react";
import ReactPlayer from "react-player";


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
            secondLink: props.secondLink,
            imgPath: props.imgPath,
            vidURL: props.vidURL,

        }

        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel() {
        this.setState({isToggled: !this.state.isToggled})
    }


    render() {
        return (
            <div className='project-container' onClick={(e) => this.togglePanel(e)}>
                <div id={this.state.isToggled ? 'active' : 'muted'}>
                {this.state.isToggled ? (
                    <ul id={"list"}>
                        <li>Name: {this.props.name}</li>
                        <li>{this.props.language !== null ? 'Language: ': ''}{this.props.language}</li>
                        <li className={'Tech'}>{this.props.technologies !== null ? 'Technologies used: ': ''}{this.props.technologies}</li>
                        <li><a href={this.props.link}>Link to projects main page</a></li>
                        <li><a href={this.props.secondLink}>{this.props.secondLink !== null ? 'Link to projects repo': ''}</a></li>
                        {this.props.imgPath !== null  ? <li><img src={this.props.imgPath}/></li>: ''}
                        {this.props.vidURL !== null ? <li id={'vid'}><ReactPlayer url={this.props.vidURL}/></li>: ''}
                        <li>{this.props.shortDescription}</li>
                    </ul>
                    ): (
                    <div>{this.props.name}</div>
                )}
                </div>
            </div>
                )

}}

Project.defaultProps = {
    language: null,
    technologies: null,
    imgPath: null,
    secondLink: null,
    vidURL: null

}

