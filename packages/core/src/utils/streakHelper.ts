import { eachDayOfInterval, compareAsc, format } from 'date-fns';
import type { ResultDate, SortingDateProps } from '../types';

const stringRange: string[] = [];

const streakHelper = {
  getRange: (start: Date | number, end: Date | number) =>
    eachDayOfInterval({ start, end }),
  changeFormatRange: (range: Date[]) =>
    range.forEach((yyyymmdd) => stringRange.push(format(yyyymmdd, 'yyyyLLdd'))),
  changeFormatDate: (dates: SortingDateProps[]) => {
    const map = new Map<string, ResultDate[]>();
    dates.forEach((date) => {
      const key = format(date.date, 'YYYYMMDD');
      const value: ResultDate = { type: date.type, amount: date.amount };
      if (map.has(key)) map.get(key)?.push(value);
      else map.set(key, [value]);
    });
    return map;
  },
  sortForDate: (date: SortingDateProps[]) => {
    return date.sort((a, b) => compareAsc(a.date, b.date));
  },
  sumAmountByType: (mapByDate: Map<string, ResultDate[]>) => {
    const newMap = new Map<string, ResultDate[]>();
    mapByDate.forEach((value, key) => {
      newMap.set(key, []);
      value.forEach((obj) => {
        let summedUp = false;
        newMap.get(key)?.forEach((compareObj) => {
          if (obj.type === compareObj.type) {
            compareObj.amount += obj.amount;
            summedUp = true;
          }
        });
        if (summedUp === false) {
          newMap.get(key)?.push(obj);
        }
      });
    });
    return newMap;
  },
  putRangeDate: (array: Map<string, ResultDate[]>) => {
    const newArray = new Map<string, ResultDate[]>();
    for (let i of stringRange) {
      if (array.has(i)) newArray.set(i, array.get(i) as ResultDate[]);
      else newArray.set(i, []);
    }
    return newArray;
  },
};

export default streakHelper;
