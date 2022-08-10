import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'





function CardDetails({url, name}) { 
  return (
    <Card sx={{ maxWidth: 345, 
    boxShadow: 12,
    height: '18rem',
    // width: "15rem",
    background: "linear-gradient(to right, #c9ffbf, #ffafbd)" ,
    borderRadius:"5%",
    alignItems:'center'
    }} 
     >
      <Link to={`/pokemon/${name}`} style={{ textDecoration: 'none' }}>
        <CardContent  >
      <Avatar
       alt={name} 
      //  src ={url}
        src="https://cdn.vox-cdn.com/thumbor/FHOKTiKEBNnFid9JYeRjAR4taqA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13050321/pikachu_review_lead.jpg"
        sx={{ width: "134px",
          height: "143px",
          margin: "0px 43px",
          fontSize: "76px",
        }}
      />
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', color:'Blick', marginTop: "10px"
          }}>
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
   )
}

export default CardDetails