import React, { useCallback, useMemo } from 'react';
import createDate, { SortingDateProps, ResultDate } from '../../utils/core';
import styled from '@emotion/styled';
import { match } from '../../utils/misc';

export interface OnClickDay {
  day: string;
  data: ResultDate[];
}

export interface Props {
  data: SortingDateProps[];
  onClickDay?: (data: OnClickDay) => void;
  options?: {
    color?: string;
    gap?: number;
    size?: number;
  };
}

const month: { [key: string]: string } = {
  '01': 'JAN',
  '02': 'FEB',
  '03': 'MAR',
  '04': 'APR',
  '05': 'MAY',
  '06': 'JUN',
  '07': 'JUL',
  '08': 'AUG',
  '09': 'SEP',
  '10': 'OCT',
  '11': 'NOV',
  '12': 'DEC',
};

const GrassBase = styled.div`
  width: 100%;
  overflow-x: auto;
  direction: rtl;
`;

export const Grass: React.FC<Props> = ({
  data,
  onClickDay,
  options = { color: '#007950', gap: 2.5, size: 15 },
}) => {
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

  const isMonthStart = (date: String) => {
    if (date.substring(date.length - 2) === '01') return true;
    return false;
  };

  const handleClickDay = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target instanceof Element) {
        if (onClickDay) {
          if (result.get(e.target.id))
            onClickDay({
              day: e.target.id,
              data: result.get(e.target.id) || [],
            });
        }
      }
    },
    [onClickDay, result]
  );

  const createGrass = () => {
    const range = getStreakHelperResult;
    let rectArr: React.ReactNode[] = [];
    let textArr: React.ReactNode[] = [];
    let x = 10;
    let y = 10;
    let width = options.size || 15;
    let height = options.size || 15;
    let count = 0;

    range.forEach((el, index) => {
      if (count % 7 === 0) {
        x += 20;
      }

      rectArr.push(
        React.createElement('rect', {
          width,
          height,
          x,
          y: y + 20 * (count % 7),
          rx: 4,
          ry: 4,
          fill: match<number, string>(el.value.length)
            .on(
              (x) => x === 0,
              () => '#dddfe0'
            )
            .otherwise(() => options.color || ('#007950' as string)),
          fillOpacity: match<number, string>(el.value.length)
            .on(
              (x) => x === 0,
              () => '100%'
            )
            .on(
              (x) => x > 0 && x <= 2,
              () => '25%'
            )
            .on(
              (x) => x > 2 && x <= 6,
              () => '45%'
            )
            .on(
              (x) => x > 6 && x <= 15,
              () => '70%'
            )
            .on(
              (x) => x > 15 && x <= 22,
              () => '100%'
            )
            .otherwise(() => 'hsl(210, 100%, 70%)'),
          strokeWidth: options.gap || 2.5,
          stroke: '#fff',
          key: index,
          id: el.date,
          onClick: handleClickDay,
        })
      );

      if (isMonthStart(el.date)) {
        textArr.push(
          <text x={x} y={163} fontSize={14} key={el.date}>
            {
              month[
                `${el.date.substring(el.date.length - 4, el.date.length - 2)}`
              ]
            }
          </text>
        );
      }

      count += 1;
    });

    const svgArr: React.ReactNode = React.createElement(
      'svg',
      {
        viewBox: '0 0 1120 180',
        display: 'block',
        width: 1100,
        height: 200,
        background: '#fff',
        margin: '0px auto',
      },
      [...rectArr, ...textArr]
    );
    return svgArr;
  };

  return <GrassBase>{createGrass()}</GrassBase>;
};
