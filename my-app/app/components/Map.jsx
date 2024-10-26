import React from 'react'

function Map() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe
                src="https://www.google.com/maps/d/u/0/edit?mid=1C4grh_9m4qXpRhXx7VL0f4LtNESCm8I&usp=sharing"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>)
}

export default Map