import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {
  
// Transform the search results into the object we require
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
      width: "100%",
      length: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });

    return (<ReactMapGL
      mapStyle='mapbox://styles/jadesnider/clf039mcm000t01ob6xj58pn4'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >    
    </ReactMapGL>
    );
}

export default Map;