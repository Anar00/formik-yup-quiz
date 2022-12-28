import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home';
function Main() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then((res) => setData(res.data))
    })
  
    

    return (

        <div className='data'>

            {data.map((datas) => {
                return <Home datas={datas} />   
            })}

        </div>
    )
}

export default Main