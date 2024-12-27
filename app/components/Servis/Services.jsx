import React from 'react'
import './style.css'

function Services () {
  const List = [
    'Peyzaj',
    'Elektrik',
    'Drenaj',
    'İçme Suyu',
    'Yağmur Suyu Çalışmaları',
    'Kanalizasyon'
  ]

  return (
    <div id='services' className='container pb-4'>
      <div>
        {' '}
        <p className='textHead'>Hizmetlerimiz</p>
      </div>
      <div>
        <ul  className='box'>
          {List.map((a, index) => (
            <li  key={index} className='containerWrapper'>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
