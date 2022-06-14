import React from 'react'
import MotoCard from './MotoCard'

const MotoList = ({data , buyAlert}) => {
    
    console.log(data)
  return (
    <div style={{display:"flex" ,margin:"20px 20%" , border:"3px solid blue"}}>
        {data.map((el,i)=>(
            <MotoCard Moto={el} key={i} buyAlert={buyAlert} />
        ))}
    </div>
  )
}



export default MotoList