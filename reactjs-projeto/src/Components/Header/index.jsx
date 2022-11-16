import React from "react";

  export default function Header(){
    return(
    <div className="container-fluid">
        <div className="row">
    
            <div className="col-lg-12">
                <div className="row bg-secondary d-none d-lg-flex">
                    <div className="col-lg-7 text-left text-white">
                        <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-2">
                            <i className="fa fa-envelope text-primary mr-2"></i>
                            <small>sistemabraduca@braduca.net</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+011 9 9999-9999</small>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right">
                        <div className="d-inline-flex align-items-center pr-2">
                            <a className="text-primary p-2" href="https://www.facebook.com/
                            ">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-primary p-2" href="https://twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-primary p-2" href="https://br.linkedin.com">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-primary p-2" href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-primary p-2" href="https://www.youtube.com">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary"></h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <img src="./minhas-imagens/vetor/logo.png" width="150" height="150"/>
                    </div>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="./quemsomos.html" className="nav-item nav-link">Sobre Nós</a>
                            <a href="metodologia.html" className="nav-item nav-link">Metodologia</a>
                            <div className="nav-item dropdown">
                            </div>
                            <a href="contato.html" className="nav-item nav-link">Contato</a>
                </nav>
            </div>
        </div>
    </div>
        
    
    
    )
  }
    
        
    