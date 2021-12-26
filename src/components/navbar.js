import '../App.css'
import {HiHome} from 'react-icons/hi'
import {IoClose, IoPersonOutline} from 'react-icons/io5'
import {CgFileDocument} from 'react-icons/cg'
import {BsBag} from 'react-icons/bs'
import {AiOutlineAppstore, AiOutlinePicture} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'


const NavBar =()=>{

    const [showNav , setShowNav] = useState(false)


    return(
        <div className='header' id='header' >
            <nav className='nav container' >
                <a href='#' className='nav__logo' onClick={()=>{
                        setShowNav(true)
                    }}>  Menu </a>

                <div className={`nav__menu ${showNav && 'show-menu'}`} id='nav-menu'>
                    <ul className='nav__list grid'>

                        <li className='nav__item' onClick={()=>{
                                setShowNav(false)
                            }}>
                            <a href="#home" className='nav__link'>
                                <HiHome className='nav__icon'/>Home
                            </a>
                        </li>

                        <li className='nav__item' onClick={()=>{
                                setShowNav(false)
                            }}>
                            <a href='#about' className='nav__link'>
                                <IoPersonOutline className='nav__icon'/> About Us
                            </a>
                        </li>
                        
                        <li className='nav__item' onClick={()=>{
                                setShowNav(false)
                            }}>
                            <a href='#artists' className='nav__link'>
                                <CgFileDocument className='nav__icon'/>Artists
                            </a>
                        </li>

                        <li className='nav__item' onClick={()=>{
                                setShowNav(false)
                            }}>
                            <a href='#services' className='nav__link'>
                                <BsBag className='nav__icon'/> Services
                            </a>
                        </li>

                        

                        <li className='nav__item' onClick={()=>{
                                setShowNav(false)
                            }}>
                            <a href='#contact' className='nav__link'>
                                <BiMessageSquareDetail className='nav__icon'/> Contact Us
                            </a>
                        </li>
                    </ul>

                            {/* close button */}
                            <IoClose className='nav__close' id='nav-close' onClick={()=>{
                                setShowNav(false)
                            }} />
                    
                </div>

                
                
  
            </nav>
        </div>
    )

}

export default NavBar