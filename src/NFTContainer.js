import React from 'react'
import NFTCard from './NFTCard'
import App2 from './App2'


const NFTContainer = ({ nfts }) => {
    
    return (
        <div>
            {nfts.map((nft, index) => {
                return <NFTCard nft={nft} key={index}/>
                //return <App2 nft={nft} key={index}/>
                
                
            })}
            
        </div>
        
    )
}

export default NFTContainer
