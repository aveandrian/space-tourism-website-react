import { useState } from 'react'
import technologyData from '../technologyData.json'
import '../styles/Technology.css'

export default function Technology(){
    const [activeIndex, setActiveIndex] = useState(0)

    function handleClick(index){
        setActiveIndex(index)
    }
    return (
        <div className="technology-page">
        <h1 className="technology-page-title heading5"><span className="technology-page-title-number heading5">03 </span> SPACE LAUNCH 101</h1>
        <div className='technology-page-wrapper'>
            <div className='technology-selector-container'>
                {technologyData.map((technologyItem, i) => <div key={i} className={`technology-selector ${activeIndex == i ? "active" : ""}`} onClick={()=>handleClick(i)} >{i+1}</div>)}
            </div>
            <div className='technology-description'>
                <p className='technology-header'>The terminology...</p>
                <p className='technology-title heading3'>{technologyData[activeIndex].name}</p>
                <p className='technology-text body-text'>{technologyData[activeIndex].description}</p>
            </div>
            <picture className='technology-img'>
                <source srcSet={technologyData[activeIndex].images.landscape}
                        media="(max-width: 60rem)" />
                <img src={technologyData[activeIndex].images.portrait} alt="" />
            </picture>
        </div>
    </div>
    )
}