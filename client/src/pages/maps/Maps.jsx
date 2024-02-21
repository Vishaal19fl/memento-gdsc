import React from 'react'

const spacing = 10;

const Maps = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1LMl1jI3p19NcR4iJG89sFkdTpm3G_ws&ehbc=2E312F&noprof=1&z=7"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


        </div>
      );
}

export default Maps