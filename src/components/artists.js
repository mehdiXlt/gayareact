import { CgScrollV } from 'react-icons/cg'
import '../App.css'

const Artists =(props)=>{

    return(
        <section className='artists section' id='artists'>
            <div className='artists__container'>
                <h2 className='artists__title'>
                    Our Artists
                </h2>

                    <div className='main__card'>
                        <div className='artists__content'>
                            {props.influenceur.map(e=>{
                                return(
                                    <div className='samewidth'>
                                    <div className='artists__card'>
                                        <img className='influencer__img' src={`/img/${e.url_img} `} ></img>
                                        <span className='card__title'> {e.instaName} </span>
                                    </div>
                                    </div>
                                    )
                                })}
                        </div>
                            <CgScrollV className='side__scroll'/>
                    </div>
            </div>
        </section>
    ) 
}

export default Artists