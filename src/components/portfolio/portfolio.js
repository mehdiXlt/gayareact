import '../../App.css'
import old1 from '../asset/old1.jpg'
import old2 from '../asset/old2.jpg'
import old3 from '../asset/old3.jpg'
import red1 from '../asset/red1.jpg'
import red2 from '../asset/red2.jpg'
import red3 from '../asset/red3.jpg'
import black from '../asset/black.jpg'





const Portfolio =()=>{

    return (
        <section className='portfolio section '>
            <div className='portfolio__container'>
                <div className='portfolio__data'>
                    <h3 className='portfolio__title'>Our Portfolio</h3>
                    <span className='portfolio__description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias tempora exercitationem eveniet, nulla libero excepturi reprehenderit ipsa 
                    </span>
                </div>

                <div className='portfolioimg__container'>
                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={red1} alt='portfolio'/>
                        </div>
                    </div>

                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={old1} alt='portfolio'/>
                        </div>
                    </div>

                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={red2} alt='portfolio'/>
                        </div>
                    </div>

                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={old2} alt='portfolio'/>
                        </div>
                    </div>

                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={red3} alt='portfolio'/>
                        </div>
                    </div>

                    <div className='portfolio__img'>
                        <div className='portfolio__grid'>
                            <img src={old3} alt='portfolio'/>
                        </div>
                    </div>
                </div>

                <div className='portfolio__button'>
                    <a href='#contact' className='home__button'>See More</a>
                </div>
            </div>


            <div className='portfolio__container'>
                <div className='portfolio__data'>
                    <h3 className='portfolio__title'>People trusted us .</h3>
                    <span className='portfolio__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias tempora exercitationem eveniet, nulla libero excepturi reprehenderit ipsa 
                    </span>
                </div>


                <div className='portfolio__card'>

                    <div className='card__img'>
                        <img src={black} alt='' />
                    </div>
                    <div className='card__data'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias tempora exercitationem eveniet, nulla libero excepturi reprehenderit ipsa 
                        </span>
                        <div className='card__info'>
                            <h6 className='card__title'>
                                John Smiths
                            </h6>
                            <span className='card__subtitle'>
                                CEO : GAYA361 Company
                            </span>
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}

export default Portfolio