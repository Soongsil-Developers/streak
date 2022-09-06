import React from 'react';
import streakHelper from 'core';

interface CustomStreakProps {
  range: {
    start: Date;
    end: Date;
  };
  data: {
    date: Date;
    amount: number;
    type: string;
  }[];
  renderDay: ({
    date,
    amount,
  }: {
    date: Date;
    amount: number;
  }) => React.ReactNode;
}

const CustomStreak = ({ range, data, renderDay }: CustomStreakProps) => {
  const { start, end } = range;

  if (!start || !end) throw new Error();
  if (!renderDay) throw new Error();
  if (!data) throw new Error();
  if (start > end) throw new Error();

  return (
    <>
      {Object.values(streakHelper.createDate(start, end, data)).map((date) =>
        renderDay(date)
      )}
    </>
  );
};

export default CustomStreak;
