import React from 'react'
import './style.css'
function Services () {
  const List = [
    'Peyzaj',
    'elektrik',
    'drenaj',
    'içme suyu',
    'yağmur suyu çalışmaları',
    'kanalizasyon'
  ]

  return (
    <div id='services' className='container'>
      <div>
        {' '}
        <p className='textHead'>Hizmetlerimiz</p>
      </div>
      <div>
        {List.map((a, index) => (
          <ul key={index}>
            <li>{a}</li>
          </ul>
        ))}
      </div>
      <div>
        <p className='containerWrapper'>Detaylı bilgi için lütfen arayınız.</p>
      </div>
    </div>
  )
}

export default Services;