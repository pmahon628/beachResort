import React from 'react'
import title from "./Title"
import { styledBanner } from "../styledComponents/styledBanner"


export default function Banner({children, title, subtitle }){
    return (
        <Banner  
        {title}
        {subtitle}
        {children}
     />


    )
}

// banner component that takes in three props which are in the {} and displays them