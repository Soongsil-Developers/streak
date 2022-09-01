import { eachDayOfInterval } from 'date-fns';

interface dateObject {
  type: string | number;
  amount: number;
}

const streakHelper = {
  1: (start: globalThis.Date | number, end: globalThis.Date | number) => {
    return eachDayOfInterval({ start, end });
  },
  2: () => {},
  3: () => {},
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
