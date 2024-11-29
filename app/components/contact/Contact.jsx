'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import ContactImg from '../../../public/assets/about.jpg'
import Map from '../Map'
import './style.css'

const Contact = () => {
  async function handleForm (event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '977647fa-d2da-47b1-908b-379e76d485c5')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    })

    try {
      const result = await response.json()
      if (result.success) {
        setSuccessMessage('Mesajınız başarıyla gönderildi.')
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          subject: '',
          message: ''
        }) // Formu temizle
      } else {
        setSuccessMessage('Mesaj gönderilirken bir hata oluştu.')
      }
    } catch (error) {
      setSuccessMessage('Mesaj gönderilemedi. Lütfen tekrar deneyin.')
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest text-[#5651e5]'>BİZE ULAŞIN</p>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <p className='pt-8'>Biz Nerdeyiz?</p>
                <div className='flex items-center justify-between py-4'>
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://api.web3forms.com/submit'
                method='POST'
                onSubmit={handleForm}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label htmlFor='name' className='text-sm py-2'>
                      İSİM-SOYİSİM
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      id='name'
                      value={formData.name}
                      onChange={handleChange}
                      pattern='^[A-Za-zÇçĞğİıÖöŞşÜü\s]{1,50}$'
                      title='Lütfen yalnızca harfler kullanın'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor='phoneNumber' className='text-sm py-2'>
                      TELEFON NUMARASI
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='tel'
                      name='phoneNumber'
                      id='phoneNumber'
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      title='lütfen telefon numarası girin'
                      pattern='^\d{10,15}$'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor='email' className='text-sm py-2'>
                    E-MAİL
                  </label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>KONU</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='text-sm py-2'>MESAJ</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full p-4 text-logogrowhitund-100 mt-4 sendButton'
                >
                  GÖNDER
                </button>
              </form>
              {successMessage && (
                <p className='text-green-600 mt-4'>{successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
