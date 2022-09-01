import { eachDayOfInterval } from 'date-fns';
import dayjs from 'dayjs';
import type { MapDate, SortingDateProps } from '../types';

const streakHelper = {
  1: (start: globalThis.Date | number, end: globalThis.Date | number) => {
    return eachDayOfInterval({ start, end });
  },
  2: () => {},
  sortingDate: (dates: SortingDateProps[]) => {
    const map = new Map<string, MapDate[]>();
    dates.forEach((date) => {
      const key = dayjs(date.date).format('YYYYMMDD');
      const value: MapDate = { type: date.type, amount: date.amount };
      if (map.has(key)) map.get(key)?.push(value);
      else map.set(key, [value]);
    });
    return map;
  },
  4: () => {},
  5: () => {},
};

export default streakHelper;
