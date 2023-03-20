import React from 'react'
import "./Navbar.css"
export default function Navbar() {
    return (
        <>
        <div className="navigation-wrap bg-light start-header start-style">
   <div className="container">
      <div className="row">
         <div className="col-12 pt-4">
            <nav className="navbar navbar-expand-md navbar-light">
               <a className="navbar-brand" href="/" target="_blank" rel='noreferrer'>DESKLIB</a>	
               <div className="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                    <form action="/" className="search-wrap">
                        <div className="input-group w-100"> 
                        <input type="text" className="form-control search-form" style={{width:"55%"}}placeholder="Search here" />
                            <div className="input-group-append"> <button className="btn  search-button" type="submit"> <i className="fa fa-search"></i> </button> </div>
                        </div>
                    </form>
                </div>
              <div className="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className=" navbar-nav d-flex  py-4 py-md-4">
                     <li className=" nav-item pl-4 pl-md-0 ml-4 ml-md-4">
                        <a className="  nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false" target="_blank" rel='noreferrer'>Study</a>
                        <div className="dropdown-menu">
                           <a className="dropdown-item" href="/">Action</a>
                           <a className="dropdown-item" href="/">Another action</a>
                           <a className="dropdown-item" href="/">Something else here</a>
                           <a className="dropdown-item" href="/">Another action</a>
                        </div>
                     </li>
                     
                     <li className="nav-item pl-4 pl-md-0 ml-4 ml-md-4">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false" target="_blank" rel='noreferrer'>Writing</a>
                        <div className="dropdown-menu">
                           <a className="dropdown-item" href="/">Action</a>
                           <a className="dropdown-item" href="/">Another action</a>
                           <a className="dropdown-item" href="/">Something else here</a>
                           <a className="dropdown-item" href="/">Another action</a>
                        </div>
                     </li>
                     <li className="nav-item pl-4 pl-md-0 ml-4 ml-md-4">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                        <div className="dropdown-menu">
                           <a className="dropdown-item" href="/">Action</a>
                           <a className="dropdown-item" href="/">Another action</a>
                           <a className="dropdown-item" href="/">Something else here</a>
                           <a className="dropdown-item" href="/">Another action</a>
                        </div>
                     </li>
                     <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="/">Blog</a>
                     </li>

                     <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link " href="/">
                        <i class="fa fa-bars"></i>
                           </a>
                     </li>
                    
                  </ul>
                  
               </div>
              </div>
               
            </nav>
         </div>
      </div>
   </div>
</div></>
    )
}
