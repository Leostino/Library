// import react

import React from "react"


// logo component

function NewLogo(props) {
    return (
        <img className="border d-inline bg-light mr-1" src={props.src} alt={props.name} style={{width:80+"px"}} />        
    )
}


export default NewLogo;