import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import crewData from '../crewData.json'
import '../styles/Crew.css'

export default function Crew(){
    const [activeIndex, setActiveIndex] = useState(0)

    function handleClick(index){
        setActiveIndex(index)
    }

    function next(){
        if(activeIndex + 1 == crewData.length)
            return
        setActiveIndex(prev => prev+1)
    }

    function prev(){
        if(activeIndex == 0)
            return
            setActiveIndex(prev => prev-1)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => prev()
      });
    return (
        <div className="crew-page">
        <div className='crew-page-wrapper' {...handlers}>
            <h1 className="crew-page-title heading5"><span className="crew-page-title-number heading5">02 </span> MEET YOUR CREW</h1>
            <div className='crew-divider'></div>
            <div className='crew-member-description'>
                <p className='crew-member-role heading4'>{crewData[activeIndex].role}</p>
                <p className='crew-member-name heading3'>{crewData[activeIndex].name}</p>
                <p className='crew-member-bio body-text'>{crewData[activeIndex].bio}</p>
            </div>
            <img className='crew-member-img' src={crewData[activeIndex].images.webp}></img>
            
            <div className='crew-selector-container'>
                {crewData.map((crewMember, i) => <div className={`crew-selector ${activeIndex == i ? "active" : ""}`} onClick={()=>handleClick(i)} ></div>)}
            </div>
        </div>
    </div>
    )
}