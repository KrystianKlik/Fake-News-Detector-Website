import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div style={{ color: 'red',}}>{text}</div>;  

export default class Geolocation extends Component {
    static defaultProps = {
        center: {
            lat: 54.413424,
            lng: 18.578256
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '30vh', width: '100vh' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={54.413424}
                        lng={18.578256}
                        text="Our headquarter"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

