import React from 'react';
import { loadState } from '../location/localStorage';
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

//  for(let i = 0; i = this.state.arrayOfData.length; i++) {
//    if(this.state.arrayOfData[i].weather.date === ) 
//  }
   return(
       <div className = 'modalTable' >
         <div key={`id-${this.state.arrayOfData[0].weather.date}`} className="modal-data">
          <ListGroup key={'3'} variant="flush">
            <ListGroup.Item><b>Weather</b></ListGroup.Item>
            <ListGroup.Item>Temperature: {this.state.arrayOfData[0].weather.temperature}</ListGroup.Item>
            <ListGroup.Item>Description: {this.state.arrayOfData[0].weather.description}</ListGroup.Item>
            <ListGroup.Item>Feels like: {this.state.arrayOfData[0].weather.feelsLike}</ListGroup.Item>
            <ListGroup.Item>Humidity: {this.state.arrayOfData[0].weather.humidity}</ListGroup.Item>
            <ListGroup.Item>Wind: {this.state.arrayOfData[0].weather.wind}</ListGroup.Item>
          </ListGroup>
          <Button variant="secondary" className = "buttonClose" onClick = {this.props.handleModal}>Close</Button>
         </div>
       </div>
    )
  }
}

export default Modal;