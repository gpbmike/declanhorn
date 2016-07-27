import React, { Component } from 'react';
import './App.css';
import moment from 'moment';

const freedom = moment('2015-07-26').add(18, 'years');

const pluralize = (count, singular, plural) => count === 1 ? singular : plural;

class App extends Component {
  state = {}

  componentWillMount() {
    this.tick();
  }

  tick = () => {
    const duration = moment.duration(freedom.diff());
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    this.setState({
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    });
  }

  componentDidMount() {
    setInterval(this.tick, 100);
  }

  render() {
    return (
      <div className="App">
        <div>Time until freedom!</div>
        <div>
          {this.state.years} {pluralize(this.state.years, 'year', 'years')}
          {' '}
          {this.state.months} {pluralize(this.state.months, 'month', 'months')}
          {' '}
          {this.state.days} {pluralize(this.state.days, 'day', 'days')}
          {' '}
          {this.state.hours} {pluralize(this.state.hours, 'hour', 'hours')}
          {' '}
          {this.state.minutes} {pluralize(this.state.minutes, 'minute', 'minutes')}
          {' '}
          {this.state.seconds} {pluralize(this.state.seconds, 'second', 'seconds')}
        </div>
      </div>
    );
  }
}

export default App;
