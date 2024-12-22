import React from 'react'
import '../../index.css'

export default function ErrorMessage({message}) {
  return (
    <div className='container error-message'>{message}</div>
  )
}