import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import styles from './style.css';
import assetDescription from './assetDescription';

const AssetDescription = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (n) => {
    const result = imageIndex + n;
    if (result == assetDescription.images.length) setImageIndex(0);
    else if (result < 0) setImageIndex(assetDescription.images.length - 1);
    else setImageIndex(result);
  };

  return (
    <Box className="parent-box">
      <Box className="left-box">
        <h2>Description of the Asset</h2>
        <h3>Current Owner: {assetDescription.owner}</h3>
        <h3>Price: Nrs {assetDescription.price.ruppees}</h3>
        <h3>Price: {assetDescription.price.sol} SOL</h3>
        <h3>
          Price(Inclusive of Tax): Nrs {assetDescription.price.ruppees * 1.13}{' '}
        </h3>
        <h3 className="extra-info">
          Extra Information: {assetDescription.extra}
        </h3>
      </Box>
      <Box className="right-box">
        <Box className="image-container">
          <img className="image" src={assetDescription.images[imageIndex]} />
        </Box>
        <Box className="image-slider-container">
          <Button
            onClick={() => changeImage(-1)}
            variant="outlined"
            className="image-sliders"
          >
            Prev
          </Button>
          <Button
            onClick={() => changeImage(+1)}
            variant="outlined"
            className="image-sliders"
          >
            Next
          </Button>
        </Box>
        <Button variant="contained" className="buy-button">
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default AssetDescription;
