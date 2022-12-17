import React from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Button(){
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isShadow) className.push("btn-shadow")
    if(props.isBlock) className.push("btn-block")

    const onClick = () => {
        if(props.onClick) props.onClick()
    };

    if (isDisabled || isLoading) {
        if(isDisabled) {
            return (isDisabled ? className.isDisabled : undefined )
        }
        else {
           if(isLoading) {
             return (isDisabled ? <span>tnuggu ya</span> : undefined )
           }
        }
    }

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

