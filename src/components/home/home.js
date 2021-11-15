import '../../App.css'

const Home =()=>{ 
    return(
        <section className='home section' id='home'>
            <div className='home__content'>
                <div className='home__aline'>
                <span className='home__line'></span>
                <h5 className='home__subtitle'>Let's Make Something Creative</h5>
                </div>

                <h1 className='home__title'>Development</h1>

                <div className='home__buttons'>
                    <a href='#project' className='home__button'>
                        Check Our Works
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home