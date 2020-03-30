import React from 'react';
import './custom-button.styles.scss'

function CustomButton({children, ...rest}) {
    return (
       <button className="custom-button" {...rest}>
           {children}
       </button>
    )
}

export default CustomButton
