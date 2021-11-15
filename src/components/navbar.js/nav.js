import '../../App.css'
import Logo from '../asset/gaya_logo.png'
const Nav =()=>{

    return(
        <nav>
            <div className='right__nav'>
                <img src={Logo} alt='Gaya'/> 
            </div>
            <div className='left__nav'>
                <ul className='nav__list'>
                    <li>
                        <a href='#home' className='nav__link'> Home</a>
                    </li>

                    <li>
                        <a href='#about' className='nav__link'> About Us</a>
                    </li>

                    <li>
                        <a href='#services' className='nav__link'> Services</a>
                    </li>

                    <li>
                        <a href='#project' className='nav__link'> Project</a>
                    </li>

                    <li>
                        <a href='#contact' className='nav__link'> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav