import React, { useState } from 'react';
import './fonm.css';
import axios from 'axios';

function Form(props) {
    const [nameimg,setNameimg] = useState('');
    const [urlimg,setUrlimg] = useState('');
    const [content,setContent] = useState('');




    const handNameimg = (e) =>{
        const name_img = e.target.value;
        setNameimg(name_img);
    } 
    const handNameUrl = (e) =>{
        const name_url = e.target.value;
        setUrlimg(name_url);
    }
    const handNameContent = (e) =>{
        const name_conten = e.target.value;
        setContent(name_conten);
    }

    const submitUer = async (e) =>{
        e.preventDefault();
        const namedata={title:nameimg,avatar:urlimg,content:content};
        const { data } = await axios.post('https://api-kupha.herokuapp.com/api/posts',namedata)
        window.location.reload();
    }



  return (
    <div className='form'>
        <form action='' onSubmit={submitUer} className='my_form'>
            <label htmlFor='form-2'>Nhập tên hình ảnh:</label>
            <input id='form-2' type='text' name='form-2' placeholder='Nhập tên vào đây' onChange={e=>handNameimg(e)}></input>
            <label htmlFor='form-1'>Nhập url hình ảnh:</label>
            <input id='form-1' type='url' name='form-1' required onChange={e=>handNameUrl(e)}></input>
            <label htmlFor='form-3'>Mô tả hình ảnh:</label>
            <input id='form-3' type='text' name='form-3' onChange={e=>handNameContent(e)}></input>
            <button>Send</button>
        </form>
        
    </div>
  )
}

export default Form