import React from 'react'

function Alert(props) {
  //func to capitialize 
  const captialize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alerts && <div className={`alert alert-${props.alerts.typ} alert-dismissible fade show`} role="alert">
      <strong>{captialize(props.alerts.typ)}</strong>: {props.alerts.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default Alert