import PropTypes from "prop-types"

const Button = ({text, onClick}) => {
    return <button style={
        {color: "snow", width: '100%', height: '110px', background: "rgba(6, 6 ,51, 1)", border: "rgba(6, 6 ,51, 1)"}
    } onClick={onClick}>{text}</button>

}

Button.propType = {
    onClick: PropTypes.func,

}

export default Button