import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapContainer extends Component (coutriesLocation){
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBEijR15QyAg0hAkXtYZ1b3Cul6PuhHfBE"}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
              </GoogleMapReact>
            </div>
          );
    }
}
export default MapContainer