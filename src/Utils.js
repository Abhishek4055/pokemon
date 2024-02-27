import { useState } from "react"

function Utils({ url, name }) {
    let array =[]
    // array.length = 10
  return (
    <>
    {array.map(()=>{
        return(

    <div className="card-contaioner">
      <div className="pokemon-logo">
       
      </div>
      <div className="pokemon-name">" "</div>
    </div>
        )
    })}
    </>
    
    )}
    export default  Utils