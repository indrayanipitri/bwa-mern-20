import React from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button(){
    return (
        <>
        </>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isBlock: propTypes.bool,
    isShadow: propTypes.bool,
    isLarge: propTypes.bool,
    isSmall: propTypes.bool
}

