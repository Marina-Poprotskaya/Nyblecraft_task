import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { getUserLocation } from './service';
import './style.scss';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
    };
  }


  componentDidMount() {
    const { getUserLocation } = this.props;
    getUserLocation();
    // localStorage.setItem('userLocation', this.state.location);
  }

  componentDidUpdate(nextProps) {
    if (JSON.stringify(nextProps.location) !== JSON.stringify(this.props.location)) {
      this.setState({ location: this.props.location });
    }
  }

  render() {
const { coordinates } = this.state.location;
const { adress } = this.state.location;
    return (
      <div>
        <div className="subinner location-block__coordinates">
          <ListGroup key={'1'} variant="flush">
            <ListGroup.Item><b>Coordinates</b></ListGroup.Item>
    <ListGroup.Item>longitude: {coordinates.longitude}°</ListGroup.Item>
            <ListGroup.Item>latitude: {coordinates.latitude}°</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="subinner location-block__adress">
          <ListGroup key={'2'} variant="flush">
            <ListGroup.Item><b>Address</b></ListGroup.Item>
            <ListGroup.Item>Country: {adress.country}</ListGroup.Item>
            <ListGroup.Item>City: {adress.city}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    )
  }
}


const isLoading = (store) => { 
  console.log('store.location.isLoading: ', store);
  return store.location.isLoading };


const getLocation = (store) => store.location;

const mapStateToProps = (store) => ({
  isLoading: isLoading(store),
  location: getLocation(store),
});

const mapDispatchToProps = {
  getUserLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);

