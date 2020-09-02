import React from 'react';
import { connect } from 'react-redux';
import { loadState } from '../location/localStorage';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
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
    this.setState({showModal: !this.state.showModal});
  }

  render() {
  const arrayForTable = [loadState()];
  console.log('arrayForTable: ', arrayForTable);
   return(
     <div className='wrapperTable'>
       { this.state.showModal && <Modal handleModal={this.handleModal}/> }
       {arrayForTable.map(() => (
         <div key={`id-${this.state.arrayOfData.location.date}`} className="rowForData">
           <div className='cell'>{this.state.arrayOfData.location.date.day}</div>
           <div className='cell'>{this.state.arrayOfData.location.date.time}</div>
           <div className='cell'>
             {this.state.arrayOfData.location.coordinates.latitude}° <br/>
             {this.state.arrayOfData.location.coordinates.longitude}°
             </div>
           <div className='cell'>{this.state.arrayOfData.location.adress.city}</div>
           <div className='cell button'>
                <Button variant="info" id = {`id-${this.state.arrayOfData.weather.date}`} onClick={this.handleModal}>Info</Button>
           </div>
         </div>
       ))}
     </div>
    )
  }
}

const mapDispatchToProps = {
  loadState,
};

export default connect(null, mapDispatchToProps)(Table);
