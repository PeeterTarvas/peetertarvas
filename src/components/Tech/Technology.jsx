import React from "react";


export const Technology = ({icon, name}) => {

    const techContainer = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '50%',


}

    return <div style={techContainer}>
        {icon}
        {name}
    </div>
}
