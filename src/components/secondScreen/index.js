import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from '../modal/index.js';
import './style.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);

    this.state = {
      arrayOfData: JSON.parse(localStorage.getItem('state')),
      showModal: false,
      indexForInfo: 0,
    }
  }

  handleModal = (e) => {
    this.state.arrayOfData.forEach((el, index) => {
      if (el.weather.date === e.target.id) {
        this.setState({ indexForInfo: index });
      }
    })
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div className='wrapperTable'>
        {this.state.showModal && <Modal handleModal={this.handleModal} index={this.state.indexForInfo} />}
        {this.state.arrayOfData.reverse().map(({ location, weather }) => (
          <div key={`id-${location.idDate}`} className="rowForData">
            <div className='cell'>{location.date.day}</div>
            <div className='cell'>{location.date.time}</div>
            <div className='cell'>
              {location.coordinates.latitude}° <br />
              {location.coordinates.longitude}°
             </div>
            <div className='cell'>{location.adress.city}</div>
            <div className='cell button'>
              <Button variant="info" id={weather.date} key={weather.date} onClick={this.handleModal}>Info</Button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Table;
