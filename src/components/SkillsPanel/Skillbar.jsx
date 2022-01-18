import React from "react";


const Skillbar = ({bgcolor, precentage, text, icon}) => {

    
    const TheIcon = icon;

    const contanerStyle = {
        height: 15,
        width: '50%',
        background: "#fcfcfc",
        borderRadius: "25px",
        marginTop: 50,
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",


    }

    const fillerStyle = {
        height: '100%',
        width:`${precentage}`,
        backgroundColor: bgcolor,
        textAlign: 'left',
    }

    const labelStyles = {
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
