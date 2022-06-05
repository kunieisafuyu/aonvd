import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Showimg from './Showimg';
import './fonm.css';

const Image = () => {
    const [item,setItem]=useState([]);

    const fectting = async () => {
        const {data}= await axios.get('https://api-kupha.herokuapp.com/api/posts')
        setItem(data);
    }

    useEffect(()=>{
        fectting();
    },[])

  return (
    <div className='item'>
        {item&&item.map(x=>(
            <Showimg avatar={x.avatar} title={x.title} content={x.content}/>
        ))}
    </div>
  )
}

export default Image