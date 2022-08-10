import React from 'react'
import { CardActionArea, Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import {  useSelector,useDispatch} from 'react-redux';
import CardDetails from './cardDetails';
import { getAllPokemonList, getList } from '../redux/reducer';


function Home() {
  const [items,setItem] = useState([])
  const dispatch = useDispatch()
   const data = useSelector(getAllPokemonList)  
   console.log('hoempage ')

   useEffect(()=>{
    dispatch(getList())
   },[dispatch])
   
   useEffect(()=>{
    if(data){
     setItem(data?.results)
    }
   },[data])

  return (
   <Grid container  spacing={12} >
   {items && items?.map((avatar) => {
     return (
           <Grid  key={avatar.name} item={true} xs={3} >
               <CardActionArea >
                  <CardDetails url={avatar.url} name={avatar.name} />
               </CardActionArea>
            </Grid>
          )
   }) }
   </Grid> 
  )
}

export default Home