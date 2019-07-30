import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import BranchModel from "../models/branchModel";

class MapBranch extends Component {

    static defaultProps = {
        // Kerry Siam Seaport Location
        center: {
            lat: 13.7200452,
            lng: 100.5135078
        },
        zoom: 15
    };

    handleApiLoaded(map, maps) {
        let bounds = new maps.LatLngBounds();
        BranchModel.branches.forEach(branch => {
            new maps.Marker({
                position: branch.position,
                map,
                title: branch.name
            })
            bounds.extend(branch.position);
        });

        map.fitBounds(bounds);
    }

    render() {
        return (
            <div style={{
                height: '100vh',
                width: '100%'
            }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyBDqlW1EIlePcA48oLVV_kYQJXm9dQ75uw'
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                >

                </GoogleMapReact>
            </div>
        )
    }
}

export default MapBranch