import { useState } from "react"
import destinationData from '../destinationData.json'
import '../styles/Destination.css'

export default function Destination(){
    const [selectedDestination, setSelectedDestination] = useState('moon')
    return (
        <div className="destination-page">
            <div className="destination-page-wrapper">
                <h1 className="destination-page-title heading5"><span className="destination-page-title-number heading5">01 </span> Pick your destination</h1>
                <div className="destination-container">
                    <img className="destination-img" src={`/assets/destination/image-${selectedDestination}.png`}></img>
                    <div className="destination-content">
                        <div className="destination-nav">
                            <p className={`nav-text ${selectedDestination == 'moon' ? 'active' : ""}`} onClick={() => setSelectedDestination('moon')}>Moon</p>
                            <p className={`nav-text ${selectedDestination == 'mars' ? 'active' : ""}`} onClick={() => setSelectedDestination('mars')}>Mars</p>
                            <p className={`nav-text ${selectedDestination == 'europa' ? 'active' : ""}`} onClick={() => setSelectedDestination('europa')}>Europa</p>
                            <p className={`nav-text ${selectedDestination == 'titan' ? 'active' : ""}`} onClick={() => setSelectedDestination('titan')}>Titan</p>
                        </div>
                        <div className="destination-description">
                            <h1 className="destination-title heading2">{destinationData[selectedDestination].title}</h1>
                            <p className="destination-text body-text">{destinationData[selectedDestination].text}</p>
                            <div className="destination-divider"></div>
                            <div className="destination-info">
                                <div className="destination-info-item">
                                    <p className="destination-info-item-title subheading2">Avg. distance</p>
                                    <p className="subheading1">{destinationData[selectedDestination].distance}</p>
                                </div>
                                <div className="destination-info-item">
                                    <p className="destination-info-item-title subheading2">Est. travel time</p>
                                    <p className="subheading1">{destinationData[selectedDestination].travelTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}