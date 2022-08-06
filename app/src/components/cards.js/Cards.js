import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.cardData.image}
        alt="land"
      />
      <CardContent style={{
        color:'#FFFFFF',
        backgroundColor:'#252D2A'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          Owner: {props.cardData.owner}
        </Typography>
        <Typography variant="body2">
          Location:{props.cardData.location}
        </Typography>
        <Typography variant="body2" >
          Price:{props.cardData.governmentPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Transfer</Button>
      </CardActions>
    </Card>
  );
}
