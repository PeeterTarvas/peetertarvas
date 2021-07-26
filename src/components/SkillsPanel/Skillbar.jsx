import SiPython from "react-icons/si";
import React from "react";


const Skillbar = ({bgcolor, precentage, text, icon}) => {

    
    const TheIcon = icon;

    const contanerStyle = {
        height: 15,
        width: '50%',
        background: "#e0e0de",
        borderRadius: "25px",
        marginTop: 50,
    }

    const fillerStyle = {
        height: '100%',
        width:`${precentage}`,
        backgroundColor: bgcolor,
        textAlign: 'right'
    }

    const labelStyles = {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 20,
    }

    const overallStyle = {
        display: 'flex',
        flexDirection: 'row',

}
    const iconStyle = {
        height: 15,
        marginTop: 38,
        marginRight: 20
    }


        return <div style={overallStyle}>
            <div style={iconStyle}>
                {TheIcon}
            </div>
            <div style={contanerStyle}>
            <div style={fillerStyle}>
            </div>
        </div>
            <div style={labelStyles}>{`${text}`}</div>
        </div>

}


export default Skillbar;
