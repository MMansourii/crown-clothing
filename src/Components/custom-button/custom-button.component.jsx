import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,isGoolgeSignIn,inverted,...otherProps}) => (
    <button className={`
    ${inverted ? 'inverted' : ''}
    ${isGoolgeSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;