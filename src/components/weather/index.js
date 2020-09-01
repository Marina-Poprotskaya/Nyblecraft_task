import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { getDataAboutWeather } from './service';
import './style.scss';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: props.weather,
    };
  }

  componentDidMount() {
    const { getDataAboutWeather } = this.props;
    getDataAboutWeather();
  }

  componentDidUpdate(nextProps) {
    if (JSON.stringify(nextProps.weather) !== JSON.stringify(this.props.weather)) {
      this.setState({ weather: this.props.weather });
    }
  }

  render() {
    const { weather } = this.state;
    return (
      <div>
        <div className="subinner location-block__Weather">
          <ListGroup key={'3'} variant="flush">
            <ListGroup.Item><b>Weather</b></ListGroup.Item>
            <ListGroup.Item>Temperature: {weather.temperature}</ListGroup.Item>
            <ListGroup.Item>Description: {weather.description}</ListGroup.Item>
            <ListGroup.Item>Feels like: {weather.feelsLike}</ListGroup.Item>
            <ListGroup.Item>Humidity: {weather.humidity}</ListGroup.Item>
            <ListGroup.Item>Wind: {weather.wind}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    )
  }
}


const isLoading = (store) => store.weather.isLoading;

const getWeather = (store) => store.weather;

const mapStateToProps = (store) => ({
  isLoading: isLoading(store),
  weather: getWeather(store),
});

const mapDispatchToProps = {
  getDataAboutWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

