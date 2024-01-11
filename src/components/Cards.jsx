import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Cards = () => {
    const [albums,setAlbums] = useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
            setAlbums(response.data);
            console.log(response.data);
        })
    },[]);
  return (
    <div className='container'>
        <div className="row">
            {
                albums.map((item,index) =>{
                    return <div className="col-lg-3">
                        <div className="card">
                        <img className='card-img-top' src={item.url} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
