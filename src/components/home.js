import '../App.css'
import Logo from '../components/asset/img/koleader_logo.png'
import {IoIosArrowDown}  from 'react-icons/io'



const Home =()=>{

    return(
        <section className='home section'>
            <img src={Logo} className='home__logo'/>

            <span className='scrolldown'>
                scroll down <IoIosArrowDown className='arrow'/>
            </span>
            
        </section>
    )
}

export default Home