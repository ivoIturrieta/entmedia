/* eslint-disable no-undef */
import React from "react";
import { compose, withProps, withHandlers, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import geolib from "geolib";

const API_KEY = "key=AIzaSyCwiA6QjJCkhE8ShoyHo0f72jO40SJHRpI&";
const API_KEY_DEV = "";

const Maps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?${API_KEY}v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ width: `100%`, height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(
    {
      positionInState: {}
    },
    {
      userPosition: (state, props) => () => {
        let crd;
        function success(pos) {
          crd = pos.coords;
        }

        const coordinates = async () => {
          const getPosition = () => {
            return new Promise(resolve => {
              navigator.geolocation.getCurrentPosition(resolve);
            }).then(position => ({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }));
          };
          const returned = await getPosition();
          crd = await await getPosition();
          return returned;
        };

        return {
          positionInState: coordinates()
        };
      }
    }
  ),
  withHandlers({
    distanceBetween: () => (target, user) => {
      const distance = geolib.getDistance(
        { latitude: target.lat, longitude: target.lng },
        { latitude: user.lat, longitude: user.lng }
      );
      return distance;
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: props.lat,
          lng: props.lng
        }}
      >
        {props.isMarkerShown && (
          <div>
            <Marker
              position={{
                lat: props.lat,
                lng: props.lng
              }}
            />
            {props.positionInState.lat && (
              <Marker
                position={{
                  lat: props.positionInState.lat,
                  lng: props.positionInState.lng
                }}
              />
            )}
          </div>
        )}
      </GoogleMap>
    </div>
  );
});

export default Maps;
