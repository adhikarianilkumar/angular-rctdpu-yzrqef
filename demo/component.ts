import { Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { CalendarEvent, CalendarUtils } from 'angular-calendar';
import { addMinutes, addHours, subMinutes, subHours } from 'date-fns';
import { GetDayViewArgs, DayView } from 'calendar-utils';
import { colors } from '../demo-utils/colors';

const EVENT_WIDTH = 150;

@Injectable()
export class DayViewSchedulerCalendarUtils extends CalendarUtils {
  getDayView(args: GetDayViewArgs): DayView {
    const view = super.getDayView(args);
    // sort the users by their names
    view.events.sort((event1, event2) =>
      event1.event.title.localeCompare(event2.event.title)
    );
    view.events = view.events.map((dayViewEvent, index) => {
      dayViewEvent.left = index * EVENT_WIDTH; // change the column of the event
      return dayViewEvent;
    });
    view.width = view.events.length * EVENT_WIDTH;
    return view;
  }
}

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html',
  providers: [
    {
      provide: CalendarUtils,
      useClass: DayViewSchedulerCalendarUtils,
    },
  ],
})
export class DemoComponent {
  view: string = 'day';

  viewDate: Date = new Date();

  dataString = 'Nov 10 2021 17:00:00';

  events: CalendarEvent[] = [
    {
      title: 'AAAA',
      color: colors.yellow,
      start: new Date(this.dataString),
    },
    {
      title: 'AAAA1',
      color: colors.yellow,
      start: addMinutes(new Date(this.dataString), 30),
    },
    {
      title: 'AAAA2',
      color: colors.yellow,
      start: addHours(new Date(this.dataString), 0),
      end: addMinutes(new Date(this.dataString), 120),
    },
    {
      title: 'CCCC',
      color: colors.blue,
      start: addMinutes(new Date(this.dataString), 30),
    },
    {
      title: 'BBBB',
      color: colors.red,
      start: addMinutes(new Date(this.dataString), 30),
    },
  ];
}
