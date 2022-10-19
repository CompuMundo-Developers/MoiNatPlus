import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id= 'encabezado_productos'> Ultimos productos</h1>
        <section id ='productos' className= 'container mt-5'>
            <div className='row'> 
            {/*produtco 1 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/cableiphone.webp" alt="Cable Iphone" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Cable Certificado Iphone</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 3 reviews</span>
                            </div>
                            <p className="card-text">$12.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 2 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/cabletipoc.webp" alt="Cable Tipo C" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Cable Tipo C</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 2 reviews</span>
                            </div>
                            <p className="card-text">$10.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 3 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/cargadorinalambricoiphone.webp" alt="Cargador Inalambrico" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Cargador Inalambrico</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 12 reviews</span>
                            </div>
                            <p className="card-text">$80.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 4 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/funda_iphone14promax.jpg" alt="Forro Iphone 14 pro max" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Forro Iphone 14 Pro Max</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 18 reviews</span>
                            </div>
                            <p className="card-text">$35.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'> 
            {/*produtco 5 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/cargadorsamsungcr.webp" alt="Cargador Samsung" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Cargador Carga Rapida Samsung</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 6 reviews</span>
                            </div>
                            <p className="card-text">$25.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 6 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/arodeluz.webp" alt="Aro de luz" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Aro de luz lez</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 14 reviews</span>
                            </div>
                            <p className="card-text">$150.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 7 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/fundasamsuns10plus.jpg" alt="Forro Samsung S10 Plus" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Forro Samsung s10 Plus</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 5 reviews</span>
                            </div>
                            <p className="card-text">$15.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 8 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/soportecargador.webp" alt="Soporte Cargador inalambrico" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Cargador inalambrico MultiEquipos</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 24 reviews</span>
                            </div>
                            <p className="card-text">$95.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home