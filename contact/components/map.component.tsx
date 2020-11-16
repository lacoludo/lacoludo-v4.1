import GoogleMaps from 'google-map-react'

import MapStyle from './map.style'

type Props = {
  lat: number
  lng: number
}

const Map = () => {
  const coordinates = {
    lat: 48.8566,
    lng: 2.3522
  }

  const createMapOptions = () => ({
    styles: MapStyle
  })

  const Marker = ({ lat, lng }: Props) => (
    <>
      <img
        src='/cd-icon-location.svg'
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )

  return (
    <div className='section padding-bottom background-black'>
      <div id='cd-google-map'>
        <div id='google-container'>
          <GoogleMaps
            bootstrapURLKeys={{
              key: 'AIzaSyAWjyb1ni-QUtQamI3h4kcMIubHbsw0kQs'
            }}
            center={{ lat: coordinates.lat, lng: coordinates.lng }}
            zoom={10}
            options={createMapOptions}
          >
            <Marker lat={coordinates.lat} lng={coordinates.lng} />
          </GoogleMaps>
        </div>
      </div>
    </div>
  )
}

export default Map
