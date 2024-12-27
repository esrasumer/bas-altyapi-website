'use client'

import React from 'react'
import { PhoneOutlined } from '@ant-design/icons'

function CallNumber () {
  const number = ' +90 551 052 95 16'

  const handleCopy = () => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert('Numara kopyalandı!')
      })
      .catch(err => {
        console.error('Kopyalama işlemi başarısız:', err)
      })
  }

  return (
    <div>
      <div className='callNumber'>
        <PhoneOutlined style={{ color: '#002050', fontSize: '24px' }} />
        <p
          onClick={handleCopy}
          style={{
            cursor: 'pointer',
            color: 'blue',
            textDecoration: 'underline'
          }}
        >
          {number}
        </p>
      </div>
    </div>
  )
}

export default CallNumber
