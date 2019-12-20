// import react

import React from "react"


// logo component

function Logo(props) {
    return (
        <img className="mt-3 ml-3 border bg-light" src={props.src} alt={props.name} style={{width:100+"px"}} />        
    )
}


export default Logo;