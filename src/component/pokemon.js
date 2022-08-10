import React, { useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon, getPokemonItem} from '../redux/reducer';
import {useParams} from 'react-router-dom'
import { Grid,Typography } from '@mui/material';


function Pokemon() {
 
    const [pokemonDetails,setPokemonDetails] = useState([ ])
    const dispatch= useDispatch()
    const pokemon = useSelector(getPokemonItem)
    
    const {name}=useParams()

    useEffect(()=>{   
        if(pokemon){     
            setPokemonDetails(pokemon)    
        }
        
    },[pokemon])
   
   console.log('pokemonpage')
    useEffect(()=>{
        dispatch(getPokemon(name))
    },[dispatch,name])

   

    return (
        <Card sx={{ maxWidth: 345, 
            boxShadow: 12,
            height: '18rem',
            // width: "15rem",
            background: "LightSteelBlue" ,
            borderRadius:"5%",
            alignItems:'center',
            
        }} 
         >
            {pokemonDetails && pokemonDetails?.stats?.map((item,key)=>  
                   <Grid sx={4} key={key} >
                   <Grid>
                   <Typography>{ item.stat.name }</Typography>
                   </Grid>
                   <Grid sx={8}>
                   <Typography>{ item.base_stat}</Typography>
                  </Grid>   
                     
                  </Grid>            
             )}
        </Card>
       )
}

export default Pokemon