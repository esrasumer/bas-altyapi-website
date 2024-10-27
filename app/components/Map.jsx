import React from 'react'

function Map() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe src="https://www.google.com/maps/d/embed?mid=1T98yKfITZlHL82yyCVIS7QCGZgZXs9Y&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"

            ></iframe>
        </div>)
}

export default Map;