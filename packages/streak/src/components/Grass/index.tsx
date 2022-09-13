import React, { useMemo } from 'react';
import createDate, { SortingDateProps, ResultDate } from '../../utils/core';

export interface Props {
  data: SortingDateProps[];
}

const Grass: React.FC<Props> = ({ data }) => {
  let result = new Map<string, ResultDate[]>();

  const getStreakHelperResult = useMemo(() => {
    const end = new Date();
    const start = new Date(
      new Date().setFullYear(
        end.getFullYear() - 1,
        end.getMonth(),
        end.getDate() + 1
      )
    );

    result = createDate(start, end, data);

    const array = Array.from(result, ([date, value]) => ({ date, value }));
    return array;
  }, [data]);

  const getGrassColor = (length: number) => {
    switch (true) {
      case length === 0:
        return 'hsl(0, 0%, 80%)';

      case length > 0 && length <= 2:
        return 'hsl(0, 100%, 85%)';

      case length > 2 && length <= 6:
        return 'hsl(0, 100%, 75%)';

      case length > 6 && length <= 15:
        return 'hsl(0, 100%, 65%)';

      case length > 15 && length <= 22:
        return 'hsl(0, 100%, 50%)';

      case length > 22:
        return 'hsl(210, 100%, 70%)';
    }
  };

  const getMonth = (month: String) => {
    switch(month) {
      case '01':
        return 'JAN';
      case '02':
        return 'FEB';
      case '03':
        return 'MAR';
      case '04':
        return 'APR';
      case '05':
        return 'MAY';
      case '06':
        return 'JUN';
      case '07':
        return 'JUL';
      case '08':
        return 'AUG';
      case '09':
        return 'SEP';
      case '10':
        return 'OCT';
      case '11':
        return 'NOV';
      case '12':
        return 'DEC';
    }
  }

  const isMonthStart = (date: String) => {
    if (date.substring(date.length - 2) === '01') return true;
    return false;
  };

  const clickDay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      result.get(e.target.id)?.map((item) => console.log(item.type));
    }
  };

  const createGrass = () => {
    const range = getStreakHelperResult;
    let rectArr: React.ReactNode[] = [];
    let textArr: React.ReactNode[] = [];
    let x = 10;
    let y = 10;
    let width = 15;
    let height = 15;
    let count = 0; // 7일마다 다음 줄로 넘어가게 해주기 위한 변수

    range.forEach((el, index) => {
      if(count % 7 === 0) {
        x += 20;
      }

      rectArr.push(
        React.createElement(
          'rect',
          { 
            width, height,
            x, y: y + (20 * (count % 7)),
            rx: 4, ry: 4,
            fill: getGrassColor(el.value.length),
            strokeWidth: 2.5,
            stroke: "#fff",
            key: index,
            id: el.date,
            onClick: clickDay,
          }
        )
      );

      if(isMonthStart(el.date)) {
        textArr.push(
          <text x={x} y={163} fontSize={14} key={el.date} >
            {getMonth(el.date.substring(
              el.date.length - 4,
              el.date.length - 2
            ))}
          </text>
        )
      };

      count += 1;
    })

    const svgArr: React.ReactNode = React.createElement('svg', { width: 2000, height: 200, background: "#fff" }, [...rectArr, ...textArr])
    return svgArr;
  }

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
      {createGrass()}
      </div>
    </>
  );
};

export default Grass;
