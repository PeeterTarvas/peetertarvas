import React from "react";
import './Information.css'
import IMG_20190616_005315__02 from '../images/IMG_20190616_005315__02.jpg'
import IMG_20190616_005516 from '../images/IMG_20190616_005516.jpg'




export class Information extends React.Component {
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
            <div className="information">
                <div id='intro'>
                    <div style={{fontSize: '120%', alignSelf: 'center', marginBottom:'20%'}}>
                        <span id={'peeter'}>Peeter</span> <br/> <span id={'tarv'}>Tarvas</span> <br/> <span id={'pers'}>personal</span> <br/>
                        <span id={'page'}>page</span>
                    </div>


                    <div className={'bioHeader'} style={{fontSize:'200%', alignSelf:'flex-start'}}>Biography</div>
                    <div className={'biography'}>
                        Hi, My name is Peeter Tarvas and I'm a first
 year CS student at TalTech.
                        Im 21 years old and have been living in Tallinn form my whole life.
                        I aspire to become a good programmer, amature historian, designer, polymath and a decent human being.
                    </div>
                </div>
            </div>

        )
    }


    /*
    <picture>
                        <img id='pictures' src={this.state.img} alt={"Picture"} onClick={this.clickPicture}/>
                    </picture>
     */

}
