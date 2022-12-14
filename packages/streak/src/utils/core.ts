import { eachDayOfInterval, compareAsc, format } from 'date-fns';

export interface SortingDateProps {
  date: Date;
  amount: number;
  type: string;
}

export interface ResultDate {
  type: string;
  amount: number;
}

const stringRange: string[] = [];

function changeStringToDate(date: Date | string) {
  if (typeof date === 'string') return new Date(date);
  return date;
}

function getRange(start: Date | number, end: Date | number) {
  if (start > end) throw new Error('시작일은 종료일보다 클 수 없습니다.');
  changeFormatRange(eachDayOfInterval({ start, end }));
}

function changeFormatRange(range: Date[]) {
  range.forEach((yyyymmdd) => stringRange.push(format(yyyymmdd, 'yyyyMMdd')));
}

function changeFormatDate(dates: SortingDateProps[]) {
  const map = new Map<string, ResultDate[]>();
  dates.forEach((date) => {
    const key = format(changeStringToDate(date.date), 'yyyyMMdd');
    const value: ResultDate = { type: date.type, amount: date.amount };
    if (map.has(key)) map.get(key)?.push(value);
    else map.set(key, [value]);
  });
  return map;
}

function sortForDate(date: SortingDateProps[]) {
  if (!date.length) throw new Error('date 배열은 빈 배열일 수 없습니다.');
  return date.sort((a, b) => compareAsc(a.date, b.date));
}

function sumAmountByType(mapByDate: Map<string, ResultDate[]>) {
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
      if (summedUp === false) newMap.get(key)?.push(obj);
    });
  });
  return newMap;
}

function putRangeDate(array: Map<string, ResultDate[]>) {
  const newArray = new Map<string, ResultDate[]>();
  for (let i of stringRange) {
    if (array.has(i)) newArray.set(i, array.get(i) as ResultDate[]);
    else newArray.set(i, []);
  }
  return newArray;
}

const createDate = (
  start: Date | number,
  end: Date | number,
  Date: SortingDateProps[]
) => {
  getRange(start, end);
  const sortedData = sortForDate(Date);
  const mapData = changeFormatDate(sortedData);
  const map = sumAmountByType(mapData);
  const createdDate = putRangeDate(map);

  return createdDate;
};

export default createDate;
