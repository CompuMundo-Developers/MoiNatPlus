import React, { Fragment} from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar navbar-dark bg-primary'>
                <div className='col-12 col-md-3'>
                   <div className='navbar-brand'>
                        <img src="./images/moinatplus.png" alt="MoiNat Plus Shop Store Logo" width="80px" />
                    </div> 
                </div>
                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input type="text"
                                id='search_field'
                                class='form-control'
                                placeholder ='Que producto estas buscando.?'>
                        </input>
                        <div class='input-group-append'>
                            <button id='search-btn' class='btn'>
                                <i class='fa fa-search' aria-hidden='true'>Buscar </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                    <button className="btn" id="login-btn">Iniciar Sesión</button>
                    <span id="cart" className="ml-3">Carrito</span>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </Fragment>
    )
} 

export default Header;