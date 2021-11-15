import '../../App.css'
import Women from '../asset/women.png'

const Test =() =>{

    return(
        <section className='test section'>
            <div className='test__content'>
                <div className='test__data'>
                    <h3 className='test__title'>
                        Trested by 5K <br />worldwide clients .
                    </h3>
                    <span className='test__description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolorum deserunt ipsum corrupti iusto nemo. Eum ratione eos praesentium quasi similique vero consectetur, dolore laboriosam consequatur?
                    </span>

                </div>

                <div className='test__image'>
                    <img src={Women} alt='gaya' />
                </div>
            </div>

            <div className='test__footer'>
                <ul>
                    <li> GONEO</li>
                    <li> SENTRY</li>
                    <li> TRANSIT</li>
                    <li> GONEO</li>
                </ul>
            </div>
        </section>
    )
}

export default Test