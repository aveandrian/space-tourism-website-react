import { NavLink } from 'react-router-dom'
import '../styles/Home.css'
export default function Home(){
    return (
    <div className="home-page">
        <div className='home-page-wrapper'>
            <div className='home-page-content'>
                <h5 className='heading5 home-page-heading5'>So, you want to travel to</h5>
                <h1 className='heading1 home-page-heading1'>Space</h1>
                <p className='home-page-text'>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <NavLink to={'destination'} className='home-page-btn'>EXPLORE</NavLink>
        </div>
        <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
        </div>
    </div>
    )
}