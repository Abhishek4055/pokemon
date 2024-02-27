import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDetails from "./cardDetails";
import { getAllPokemonList, getList } from "../redux/reducer";

function Home() {
  const [items, setItem] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(getAllPokemonList);
 

  useEffect(() => {
    dispatch(getList());
  }, []);

  useEffect(() => {
    if (data) {
      setItem(data?.results);
    }
  }, [data]);
  
  const onMouseEnterHandler=()=>{
    console.log("mouse enter")
  }

  
  return (
    <div className="container">
     {items?.map((element,index)=>{
      return(
      <div key={index} >
        <CardDetails url = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} name={element.name} mouseEnter={onMouseEnterHandler}/>
      </div>
      )
     })}
    </div>
  );
}

export default Home;
