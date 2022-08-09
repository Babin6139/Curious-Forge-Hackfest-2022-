import React from 'react'
import "./index.css"
function MintNft() {
  return (
    <div className='mintnft'>
        <div className='mintnft_form'>
            <input type="text" placeholder='Enter the name of NFT'></input>
            <input type="text" placeholder='Enter the name of NFT'></input>
            <input type="image"></input>
            <input type="submit" value='Mint Nft'></input>
        </div>
    </div>
  )
}

export default MintNft;