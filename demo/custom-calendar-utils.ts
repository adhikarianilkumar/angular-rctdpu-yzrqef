import { CalendarUtils } from 'angular-calendar';
import {
  GetWeekViewArgs,
  WeekView,
  GetDayViewArgs,
  DayView,
} from 'calendar-utils';

export class CustomCalendarUtils extends CalendarUtils {
  // getWeekView(args: GetWeekViewArgs): WeekView {
  //   const view = super.getWeekView(args);
  //   view.hourColumns.forEach((column) => {
  //     column.events.forEach((event, index) => {
  //       // This is just for the demo and won't work for every case
  //       // You'll need to adjust each events width and left positioning manually in case it overlaps
  //       if (index === 0) {
  //         event.width = 100;
  //       } else if (index === 1) {
  //         event.width = 100;
  //         event.left = 0;
  //       }
  //     });
  //   });
  //   return view;
  // }

  // Day view

  getDayView(args: GetDayViewArgs): DayView {
    const view = super.getDayView(args);
    view.width;
    view.events.forEach((event, index) => {
      // This is just for the demo and won't work for every case
      // You'll need to adjust each events width and left positioning manually in case it overlaps
      if (index === 0) {
        event.width = 100;
      } else if (index === 1) {
        event.width = 100;
        event.left = 0;
      }
    });
    return view;
  }
}
