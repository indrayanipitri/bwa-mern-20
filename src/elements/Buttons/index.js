import React from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button(){
    const className = [props.className]
    if(isPrimary) className.push("btn-primary")
    if(isLarge) className.push("btn-lg")
    if(isSmall) className.push("btn-sm")
    if(isShadow) className.push("btn-shadow")
    if(isBlock) className.push("btn-block")

    const onClick = () => {
        if(props.onClick) props.onClick()
    };

    if (props.type === "link") {
       if(props.isExternal) {
        return (
            <a href={props.href} className={className.join(" ")} target={props.target ? "_blank" : undefined} rel={props.target ? "noreferrer noopener" : undefined} style={props.style} >{props.children}</a>
        )
       } else {
        return (
            <Link to={props.href} className={className.join(" ")} style={props.style} onClick={onClick}>
                {props.children}
            </Link>
        )
       }
    }



    return (
        <>
        </>
    )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isBlock: propTypes.bool,
    isShadow: propTypes.bool,
    isLarge: propTypes.bool,
    isSmall: propTypes.bool,
    isPrimary: propTypes.bool,
    isExternal: propTypes.bool
}

