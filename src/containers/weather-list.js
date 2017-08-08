import React, { Component } from  'react';
import { connect } from 'react-redux';
import { bindActionCreators } from  'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps.js'

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => {
      return (9/5 * (weather.main.temp - 273) + 32);
    });
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color='red' unit='F' /></td>
        <td><Chart data={pressure} color='blue' unit='hpa' /></td>
        <td><Chart data={humidity} color='green' unit='%' /></td>
      </tr>
    );
  }
  render() {
    if (!this.props.weather) return <div>Enter a city to start</div>

    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    )


  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  }
}

export default connect (mapStateToProps)(WeatherList)
