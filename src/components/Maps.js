import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const Maps = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwiA6QjJCkhE8ShoyHo0f72jO40SJHRpI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: `300px`, height: `200px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: props.lat, lng: props.lng }} />
      )}
    </GoogleMap>
  );
});

export default Maps;
