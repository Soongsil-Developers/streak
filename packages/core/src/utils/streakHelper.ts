import type { MapDate, SortingDateProps } from '../types';
import { eachDayOfInterval, compareAsc } from 'date-fns';
import dayjs from 'dayjs';

interface todayData {
  type: string,
  amount: number
}

const stringPeriod:string[] = [];

const streakHelper = {
  getPeriod: (start: globalThis.Date | number, end: globalThis.Date | number) => {
    return eachDayOfInterval({ start, end });
  },
  makeStringPeriod: (period: Date[]) => {
    for(let i of period)
      stringPeriod.push(dayjs(i).format('YYYYMMDD'));
  },
  sortData: (data: {date:Date, amount:number, type:string}[]) => {
    return data.sort((a, b) => compareAsc(a.date, b.date));
  },
  3: () => {},
  putPeriodData: (array:Map<string, todayData[]>) => {
    const newArray = new Map<string, any[]>();

    for(let i of stringPeriod) {
      const value = array.has(i) ? array.get(i) : null;
      newArray.set(i, [value]);
    }
    return newArray;
  },
};

export default streakHelper;
