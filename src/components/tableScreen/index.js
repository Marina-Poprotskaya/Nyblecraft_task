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
    }
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
    // for(let i = 0; i = this.state.arrayOfData.length; i++) {
    //   console.log(this.id)
    //   if(this.state.arrayOfData[i].weather.date === Button.id) {
    //     console.log(i);
    //     return i;
    //   }
    // }
  }

  render() {
    return (
      <div className='wrapperTable'>
        {this.state.showModal && <Modal handleModal={this.handleModal} />}
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
              <Button variant="info" id={`id-${weather.date}`} onClick={this.handleModal}>Info</Button>
            </div>
          </div>

        ))}
      </div>
    )
  }
} 

export default Table;
