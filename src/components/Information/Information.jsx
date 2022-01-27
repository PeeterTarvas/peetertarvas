import React from "react";
import './Information.css'





export class Information extends React.Component {
    constructor(props) {
        super(props);
    }





    render() {
        return (
            <div className="information">
                <div id='intro'>
                    <div style={{fontSize: '120%', justifyContent:'center', marginBottom:'20%'}}>
                        <span className={'d-flex justify-self-center'}  id={'peeter'}>Peeter Tarvas</span>
                        <br/>
                    </div>


                    <div className={'bioHeader'} style={{fontSize:'200%'}}>Biography</div>
                    <div className={'biography'}>
                        Hi, My name is Peeter Tarvas and I'm a second year CS student at TalTech.
                        I'm 22 years old and have been living in Tallinn form my whole life.
                        I aspire to become a good programmer, amateur historian and a polymath.
                    </div>
                </div>
            </div>

        )
    }



}