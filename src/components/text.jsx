import React from "react";
import { useParams } from "react-router-dom";

export default function Text() {
    const {text, background, color} = useParams()
    return(
        <h3 style={{backgroundColor:background, color:color}}>The {isNaN(text)?'word':'number'} is: {text}</h3>
    )
}