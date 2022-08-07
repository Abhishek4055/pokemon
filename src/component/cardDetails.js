import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';




function CardDetails({url, name}) {
    
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 8,
    height: '20rem',
    background: "linear-gradient(to right, #c9ffbf, #ffafbd)" ,
    borderRadius:"5%",
    }} 
     >
      <CardActionArea>
      <Stack direction="row" spacing={7}>
      
      <Avatar
       alt={name} 
       // src ={url}
       src="https://cdn.vox-cdn.com/thumbor/FHOKTiKEBNnFid9JYeRjAR4taqA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13050321/pikachu_review_lead.jpg"
        sx={{ width: "154px",
          height: "173px",
          margin: "31px 88px",
          fontSize: "76px",
          
        }}
      />
      
       </Stack>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center'
          }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   )
}

export default CardDetails