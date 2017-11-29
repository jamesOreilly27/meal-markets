import React from 'react'
import BigCalendar from 'react-big-calendar'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const CalendarPresenter = ({events, props}) => (
        <BigCalendar
            {...props}
            selectable
            events={events}
            defaultDate={new Date()}
        />
)

export default CalendarPresenter
