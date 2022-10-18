import React from 'react';
import '../StyleSheet/ClearButton.css';

const ClearButton = (props) => (
    <div className = 'button-clear' onClick={props.handleClic}>
        {props.children}
    </div>
);

export default ClearButton;