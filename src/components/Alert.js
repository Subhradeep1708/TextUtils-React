import React from 'react'

export default function Alert(props) {

    const capitallize = (word)=>{
        const lower = word.toLowerCase(); // input ko lowercase me karega
        return lower.charAt(0).toUpperCase() + lower.slice(1) // first letter ko capital then 2nd se sab ko join
    }
    return (
        
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitallize(props.alert.type)}</strong>: {props.alert.msg}
                
            </div>
        
    )
}
