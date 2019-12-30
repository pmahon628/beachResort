import React from 'react'
import { styledBanner } from "../styledComponents/styledBanner"


export default function Banner({children, title, subtitle }){
    return (
        <styledBanner  
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children}
     />


    )
}

// banner component that takes in three props which are in the {} and displays them