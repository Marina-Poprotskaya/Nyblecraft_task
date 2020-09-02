import React from 'react';
import { connect } from 'react-redux';
import { loadState } from '../location/localStorage';
import './style.scss';

class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfData: JSON.parse(localStorage.getItem('state')),
    }
  }

  // componentDidMount() {
  //   console.log('loadState(): ', loadState());
  //   const { loadState } = this.props;
  //   loadState();
  //   console.log('loadState(): ', loadState());
  // }
  


  render() {
  const date = localStorage.getItem('state')
  console.log('date: ', date);
  console.log('this.state: ', this.state);
  const arrayForTable = [loadState()];
  console.log('arrayForTable: ', arrayForTable);

   return(
     <div className='wrapperTable'>
       {arrayForTable.map(() => (
         <div key={`id-${this.state.arrayOfData.location.date}`} className="rowForData">
           <div className='cell'>{this.state.arrayOfData.location.date.day}</div>
           <div className='cell'>{this.state.arrayOfData.location.date.time}</div>
           <div className='cell'>
             {this.state.arrayOfData.location.coordinates.latitude}° <br/>
             {this.state.arrayOfData.location.coordinates.longitude}°
             </div>
           <div className='cell'>{this.state.arrayOfData.location.adress.city}</div>
           <div className='cell button'>Кнопка</div>
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
