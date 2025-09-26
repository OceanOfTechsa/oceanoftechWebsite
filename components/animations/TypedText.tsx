'use client';

import React from 'react'
import {ReactTyped} from "react-typed";

interface TypedTextProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    className?: string;
}

const TypedText = ({strings, typeSpeed, backSpeed, loop = true, className}:  TypedTextProps) => {
    return (
        <ReactTyped
            strings={strings}
            typeSpeed={typeSpeed ? typeSpeed : 34}
            backSpeed={backSpeed ? backSpeed : 40}
            loop={loop}
            className={className}
        />
    )
}
export default TypedText
