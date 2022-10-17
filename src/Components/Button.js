import React from "react";
import '../StyleSheet/Button.css';

function Button(props) {
    
    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    }

    return(
        <div className = {`Button-container ${isOperator(props.children) ? 'Operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}
export default Button;