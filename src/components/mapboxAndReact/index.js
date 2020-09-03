import React from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import MAP_TOKEN from './constants'
import './style.scss';

mapboxgl.accessToken = MAP_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: this.props.coordinates.longitude,
      lat: this.props.coordinates.latitude,
      zoom: 9
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  
  componentDidUpdate(nextProps) {  
    if (JSON.stringify(nextProps.coordinates.longitude) !== JSON.stringify(this.props.coordinates.longitude)) {
      this.setState({ 
        lng: this.props.coordinates.longitude,
        lat: this.props.coordinates.latitude 
       });
       const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });
    }
  } 

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

const getCoordinates = (store) => store.location.coordinates;

const mapStateToProps = (store) => ({
  coordinates: getCoordinates(store),

});

export default connect(mapStateToProps, null)(Map);


