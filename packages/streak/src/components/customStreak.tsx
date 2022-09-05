import React from 'react';

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
  if (!data) throw new Error(); // 2번 함수에서 예외처리
  if (start > end) throw new Error(); // 1번 함수에서 예외처리
  // amount는 무조건 양수 예외처리

  // const range = streakHelper.getRange(start, end);
  // streakHelper.changeFormatRange(range);
  // const sortedData = streakHelper.sortForDate(data);
  // const mapData = streakHelper.changeFormatDate(sortedData);
  // const map = streakHelper.sumAmountByType(data);

  return (
    <>
      {Object.values(streakHelper.putRangeDate(map)).map((date) =>
        renderDay(date)
      )}
    </>
  );
};

export default CustomStreak;
