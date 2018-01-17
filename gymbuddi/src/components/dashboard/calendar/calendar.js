import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'


BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  render() {
    return(
      <BigCalendar
      height="100vh"
      selectable
      events={this.state.events} 
      // defaultView='week'
      defaultDate={new Date(2018, 1, 16)}
      />
    )
  }
}