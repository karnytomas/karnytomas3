import React from 'react';

function Map() {
  return (
    <div className="p-8 lg:p-28 space-y-8">
        <h2 className="text-4xl">Kde nás najdete?</h2>

        <div className="border border-gray-300 w-full rounded-3xl overflow-hidden shadow-lg">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.7528179732854!2d15.05283431589813!3d50.767915279520314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709ea28a6f49b2d%3A0x1be15d17a4a6597b!2s1.%20m%C3%A1je%20870%2F14%2C%20460%2007%20Liberec!5e0!3m2!1scs!2scz!4v1609231073000!5m2!1scs!2scz"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            ></iframe>
        </div>
    </div>

  );
}

export default Map;