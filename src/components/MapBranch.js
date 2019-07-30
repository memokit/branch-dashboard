import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux'
import Actions from "../redux/actions";


class MapBranch extends Component {

    static defaultProps = {
        // Kerry Siam Seaport Location
        center: {
            lat: 13.7200452,
            lng: 100.5135078
        },
        zoom: 15
    };

    markerClick = (marker) => {
        console.log(`เลือกสาขา ${marker.get('branchId')} ${marker.get('title')}`);
        this.props.showBranchDataInChart(marker.get('branchId'));
    }

    handleApiLoaded(map, maps) {
        let bounds = new maps.LatLngBounds();
        let branches = this.props.branches;
        branches.forEach(branch => {
            let marker = new maps.Marker({
                position: branch.position,
                map,
                title: branch.name,
                branchId: branch.id
            })

            marker.addListener('click', () => {
                this.markerClick(marker)
            });

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

//snippet reduxmap
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        branches: state.branches
    };
}

const mapDispatchToProps =  dispatch => {
    return {
        showBranchDataInChart: (branchId) => dispatch(Actions.showBranchData(branchId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MapBranch)