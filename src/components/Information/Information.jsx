import React from "react";
import './Information.css'
import IMG_20190616_005315__02 from '../images/IMG_20190616_005315__02.jpg'
import  IMG_20190616_005516 from '../images/IMG_20190616_005516.jpg'




export default class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: IMG_20190616_005315__02,
        };

        this.clickPicture = this.clickPicture.bind(this);
    }


    clickPicture = (event) => {
        if (this.state.img === IMG_20190616_005315__02) {
            this.setState({img: IMG_20190616_005516});
        } else {
            this.setState({img: IMG_20190616_005315__02})
        }
    }


    render() {
        return (
            <>
            <div className="information">
                <div id='intro'>
                    Hi! My name is Peeter and this is my personal website

                    <picture>
                        <img id='pictures' src={this.state.img} alt={"Picture"} onClick={this.clickPicture}/>
                    </picture>
                    <ul id='list'>
                        <li>Peeter Tarvas</li>
                        <li>21 years old</li>
                        <li>Tallinn, Estonia</li>
                        <li>Informatics at Taltech</li>
                    </ul>
                </div>
            </div>

            </>

        )
    }



}