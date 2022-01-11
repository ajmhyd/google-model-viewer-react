import React from 'react'
import ModelViewer from './Modelviewer'




const NFTCard = ({ nft }) => {
    
    return (
        <div>
            <div class = "glow-on-hover" type = "button" id="card">
            
            {nft.meta.name}
            
            </div>
            <ModelViewer />    
            
            
        </div>

        
    )
}

export default NFTCard
