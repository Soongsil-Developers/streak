import { eachDayOfInterval } from 'date-fns';

const streakHelper = {
  1: (start: globalThis.Date | number, end: globalThis.Date | number) => {
    return eachDayOfInterval({ start, end });
  },
  2: () => {},
  3: () => {},
  4: () => {},
  5: () => {},
};

export default streakHelper;
