import React from 'react'

export default function Notdetay({not}) {
  return (
    <div className='not-detay'>
      <h4>{not.baslik}</h4>
      <p>{not.aciklama}</p>
      <p>{not.createdAt}</p>
    </div>
  )
}
