import { CgArrowLongDownC } from 'react-icons/cg'
import '../App.css'

const About =()=>{

    return(
        <section className='about section' id='about'>
            <div className='about__container'>
                <h2 className='about__title'>
                    Who Are We 
                </h2>

                <div className='about__data'>
                    <span className='about__subtitle'> <span className='kol'>KOL</span>eader </span>
                    <p className='about__description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, labore fugit ea quis eveniet adipisci! Modi rerum tempore ratione molestias quas officia culpa doloremque nihil consectetur expedita sint delectus pariatur odio aliquid maiores voluptate, 
                    </p>
                </div>

                <div className='about__data right'>
                    <span className='about__subtitle left'> GAYA<span className='kol'>361</span> </span>
                    <p className='about__description '>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, labore fugit ea quis eveniet adipisci! Modi rerum tempore ratione molestias quas officia culpa doloremque nihil consectetur expedita sint delectus pariatur odio aliquid maiores voluptate, 
                    </p>
                </div>


                < CgArrowLongDownC className='down__raod'/>
            </div>
        </section>
    )
}

export default About