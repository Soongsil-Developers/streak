import React from 'react';
import createDate, { SortingDateProps, ResultDate } from '../../utils/core';

export interface Props {
  data: SortingDateProps[];
}

const Grass: React.FC<Props> = ({ data }) => {
  let result = new Map<string, ResultDate[]>();

  const getStreakHelperResult = () => {
    const end = new Date();
    const start = new Date(
      new Date().setFullYear(
        end.getFullYear() - 1,
        end.getMonth(),
        end.getDate() + 1
      )
    );

    result = createDate(start, end, data);
    console.log(result);

    const array = Array.from(result, ([date, value]) => ({ date, value }));
    console.log(array);
    return array;
  };

  const getGrassColor = (length: number) => {
    switch (true) {
      case length === 0:
        return { fill: 'grey', opacity: '0.2' };

      case length > 0 && length <= 2:
        return { fill: 'green', opacity: '0.25' };

      case length > 2 && length <= 6:
        return { fill: 'green', opacity: '0.4' };

      case length > 6 && length <= 15:
        return { fill: 'green', opacity: '0.6' };

      case length > 15 && length <= 22:
        return { fill: 'green', opacity: '1' };

      case length > 22:
        return { fill: 'red', opacity: '1' };
    }
  };

  const isMonthStart = (date: String) => {
    if (date.substring(date.length - 2) === '01') return true;
    else return false;
  };

  const clickDay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element)
      result.get(e.target.id)?.map((item) => console.log(item.type));
  };

  return (
    <>
      <div
        style={{
          height: '220px',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        {getStreakHelperResult().map((data, index) => (
          <span key={index} onClick={clickDay}>
            <svg style={{ width: '25', height: '25' }}>
              <rect
                id={data.date}
                width={20}
                height={20}
                rx="5"
                ry="5"
                style={getGrassColor(data.value.length)}
              />
              {isMonthStart(data.date) && (
                <text x="2" y="15" fontSize={13}>
                  {data.date.substring(
                    data.date.length - 4,
                    data.date.length - 2
                  )}
                </text>
              )}
            </svg>
          </span>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Grass;
