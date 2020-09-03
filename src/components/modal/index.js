import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfData: JSON.parse(localStorage.getItem('state')),
    }
  }

  render() {
  const index = this.props.index;
  const { weather } = this.state.arrayOfData[index];
   return(
       <div className = 'modalTable' >
         <div key={`id-${weather.date}`} className="modal-data">
          <ListGroup key={'3'} variant="flush">
            <ListGroup.Item><b>Weather</b></ListGroup.Item>
            <ListGroup.Item>Temperature: {weather.temperature}</ListGroup.Item>
            <ListGroup.Item>Description: {weather.description}</ListGroup.Item>
            <ListGroup.Item>Feels like: {weather.feelsLike}</ListGroup.Item>
            <ListGroup.Item>Humidity: {weather.humidity}</ListGroup.Item>
            <ListGroup.Item>Wind: {weather.wind}</ListGroup.Item>
          </ListGroup>
          <Button variant="secondary" className = "buttonClose" onClick = {this.props.handleModal}>Close</Button>
         </div>
       </div>
    )
  }
}

export default Modal;