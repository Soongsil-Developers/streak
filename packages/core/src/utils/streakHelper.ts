import { eachDayOfInterval } from 'date-fns';
import dayjs from 'dayjs';
import type { MapDate, SortingDateProps } from '../types';

interface dateObject {
  type: string | number;
  amount: number;
}

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
  sumAmountByType: (mapByDate: Map<string, Array<dateObject>>) => {
    const newMap = new Map<string, Array<dateObject>>()

    mapByDate.forEach((value, key, map) => {
      newMap.set(key, [])

      value.forEach((obj) => {
        let summedUp = false

        newMap.get(key)?.forEach((compareObj) => {
          if(obj.type === compareObj.type) {
            compareObj.amount += obj.amount
            summedUp = true
          } 
        })

        if(summedUp === false) {
          newMap.get(key)?.push(obj)
        }
      })

    })
    return newMap
  },
  5: () => {},
};

export default streakHelper;
