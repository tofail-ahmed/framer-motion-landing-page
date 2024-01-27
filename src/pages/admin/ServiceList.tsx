import React, { useEffect, useState } from 'react'

const ServiceList = () => {
  const [sevices,setServices]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/services`)
    .then(res=>res.json())
    .then(data=>setServices(data.data))
  },[])
  console.log(sevices)
  return (
    <div>ServiceList</div>
  )
}

export default ServiceList