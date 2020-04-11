import GoogleMaps from 'google-map-react'

import Map from '../styles/map'

export default () => {
  const createMapOptions = () => ({
    styles: Map
  })

  const Marker = () => (
    <>
      <img
        src="/cd-icon-location.svg"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )

  return (
    <div className="section padding-bottom background-black">
      <div id="cd-google-map">
        <div id="google-container">
          <GoogleMaps
            bootstrapURLKeys={{
              key: 'AIzaSyAWjyb1ni-QUtQamI3h4kcMIubHbsw0kQs'
            }}
            center={{ lat: 48.735351, lng: 2.295592 }}
            zoom={10}
            options={createMapOptions}
          >
            <Marker lat={48.735351} lng={2.295592} />
          </GoogleMaps>
        </div>
      </div>
    </div>
  )
}
