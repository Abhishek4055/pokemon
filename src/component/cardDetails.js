import React from "react";


function CardDetails({ url, name,mouseEnter,mouseLeave }) {
  return (
    <div className="card-contaioner" onMouseEnter={()=>mouseEnter()} onmouseleave={()=>mouseLeave()}>
      <div className="pokemon-logo">
        <img src={url} />
      </div>
      <div className="pokemon-name">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
    </div>
  );
}

export default CardDetails;
