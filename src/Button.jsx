import PropTypes from "prop-types";

function Button ({text}){
    return <button style={{
        color:"aliceblue",
        backgroundColor: "black",
    }}>{text}</button>
}

Button.protoTypes={
    text: PropTypes.string.isRequired
}
export default Button;