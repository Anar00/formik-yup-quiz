import React, { useRef } from 'react'
import { Card } from 'antd';
const Home = ({datas}) => {
  const itemRef= useRef();
  return (

    <div ref={itemRef} className="site-card-border-less-wrapper">
    <Card className='card'
     title= {datas.Subject}

      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>{datas.Description}</p>
      <p>{datas.Category}</p>
    </Card>
  </div>
    
  )
}

export default Home