import React from 'react'


export default function Banner({children, title, subtitle }){
    return (
     <div className="Banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
     </div>
    )
}

// banner component that takes in three props which are in the {} and displays them