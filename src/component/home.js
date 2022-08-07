import React from 'react'
import { Grid } from '@mui/material';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getList } from '../redux/reducer';
import CardDetails from './cardDetails';

function Home() {

   const [items,setItem] = useState([])

   const dispatch = useDispatch()
   const data = useSelector((state)=>state.pokemonList.pokemonList)
 
 
 useEffect(()=>{
  if(data){
   setItem(data?.results)
  }
 },[data])
 
   useEffect(()=>{
     dispatch(getList())
   },[dispatch])
   
  
   
  return (
   <Grid container  spacing={3} >
   {items && items?.map((avatar,i) => {
     return (
           <Grid  key={i} item={true} xs={3} >
               <CardDetails url={avatar.url} name={avatar.name} />
            </Grid>
   )
   }) }
   </Grid> 
  )
}

export default Home