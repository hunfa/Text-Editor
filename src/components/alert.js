import React from 'react'

export default function alert({msg,type,makealertfasle}) {
  return (
    <div class={`alert alert-${type} alert-dismissible fade show`} role="alert">
    <strong>{type}</strong>: {msg}
    <button onClick={makealertfasle} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
