import React from 'react'
import './fonm.css'

function Showimg(props) {
  return (
    <div className='img-item'>
        <div>
            <img src={`${props.avatar}`}/>
        </div>
        <div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    </div>
  )
}

export default Showimg;