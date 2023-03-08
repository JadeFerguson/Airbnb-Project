import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
      width: "100%",
      height: "100%",
      latitude: 37.7577,
      longitude: -122.4376,
      zoo: 11,
  });


    return <ReactMapGL
      mapStyle='mapbox://styles/jadesnider/clf039mcm000t01ob6xj58pn4'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}

    >    
    </ReactMapGL>
}

export default Map;