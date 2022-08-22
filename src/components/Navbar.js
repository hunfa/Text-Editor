import React from 'react'


export default function NavBar({title,handledarkmode,mode,handlealert}) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
    
        
        </ul>
        <div class="form-check form-switch">
  <input onClick={handledarkmode} class="form-check-input" type="checkbox" role="switch" aria-checked id="flexSwitchCheckDefault"/>
  <label style={{color:mode==="dark"?"white":"black"}} class="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
      </div>
    </div>
   
  </nav>
    
  )
}

