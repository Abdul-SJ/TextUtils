import React from 'react'

function Alert(props) {
  //func to capitialize 
  const captialize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '50px'}}>
    {props.alerts && <div className={`alert alert-${props.alerts.typ} alert-dismissible fade show`} role="alert">
      <strong>{captialize(props.alerts.typ)}</strong>: {props.alerts.msg}
    </div>}
    </div>
  )
}

export default Alert
