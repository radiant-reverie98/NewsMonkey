import React from 'react'

export default function NewsItem(props) {
  return (
    <>
    
      <div className="container">
      <div className="card" style={{width: "18rem"}}>
  <img src={props.img? props.img : `https://dims.apnews.com/dims4/default/acf8ffd/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6d%2Fde%2Fbf5b7a8538d84637e93cddbebf0c%2F88f6e1d9516c4a22aaed1712e2c55ca4`} className="card-img-top" alt="..."/>
  <div className={`card-body bg-${props.mode === 'primary'?'light':'dark'} text-${props.mode ==='primary'?'dark':'light'}`}>
    <h5 className="card-title">{props.title.length>20 ?  `${props.title}...` : props.title}</h5>
    <p className="card-text">{props.desc.length>40?`${props.desc}...`:props.desc}</p>
    <a href= {props.url} target="__blank"className={`btn btn-${props.mode === 'primary'?'dark': 'primary'}`}>Read More</a>
  </div>
</div>
      </div>
    
</>
  )
}
