import React from 'react'
import { useLocation } from 'react-router-dom'

function Success() {
    const location = useLocation();
  return (
    <div>Successfull</div>
  )
}

export default Success