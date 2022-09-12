import React from 'react';
import Grass from './index';

export default {
  title: '잔디밭',
  component: Grass,
  parameters: {
    componentSubtitle: 'Grass 컴포넌트',
  },
};

export const defaultButton = () => {
  return (
    <Grass
      data={[
        { date: new Date(2022, 8, 10), type: '중앙도서관', amount: 37 },
        { date: new Date(2022, 8, 10), type: '정보과학관', amount: 60 },
      ]}
    ></Grass>
  );
};

export const three = () => {
  return (
    <Grass
      data={[
        { date: new Date(2022, 8, 10), type: '중앙도서관', amount: 37 },
        { date: new Date(2022, 8, 10), type: '정보과학관', amount: 60 },
        { date: new Date(2022, 8, 10), type: '중앙도서', amount: 37 },
        { date: new Date(2022, 8, 10), type: '정보과학', amount: 60 },
      ]}
    ></Grass>
  );
};

export const four = () => {
  return (
    <Grass
      data={[
        { date: new Date(2022, 8, 10), type: '중앙도서관', amount: 37 },
        { date: new Date(2022, 8, 10), type: '정보과학관', amount: 60 },
        { date: new Date(2022, 8, 10), type: '중앙도서', amount: 37 },
        { date: new Date(2022, 8, 10), type: '정보과학', amount: 60 },
        { date: new Date(2022, 8, 10), type: '한경직기념관', amount: 23 },
        { date: new Date(2022, 8, 10), type: '정보학', amount: 60 },
        { date: new Date(2022, 8, 10), type: '한경직기관', amount: 23 },
      ]}
    ></Grass>
  );
};

export const five = () => {
  return (
    <Grass
      data={[
        { date: new Date(2022, 8, 10), type: '1', amount: 37 },
        { date: new Date(2022, 8, 10), type: '2', amount: 60 },
        { date: new Date(2022, 8, 10), type: '3', amount: 37 },
        { date: new Date(2022, 8, 10), type: '4', amount: 60 },
        { date: new Date(2022, 8, 10), type: '5', amount: 23 },
        { date: new Date(2022, 8, 10), type: '6', amount: 60 },
        { date: new Date(2022, 8, 10), type: '7', amount: 23 },
        { date: new Date(2022, 8, 10), type: '8', amount: 37 },
        { date: new Date(2022, 8, 10), type: '9', amount: 60 },
        { date: new Date(2022, 8, 10), type: '10', amount: 37 },
        { date: new Date(2022, 8, 10), type: '11', amount: 60 },
        { date: new Date(2022, 8, 10), type: '12', amount: 23 },
        { date: new Date(2022, 8, 10), type: '13', amount: 60 },
        { date: new Date(2022, 8, 10), type: '14', amount: 23 },
        { date: new Date(2022, 8, 10), type: '15', amount: 60 },
        { date: new Date(2022, 8, 10), type: '16', amount: 23 },
      ]}
    ></Grass>
  );
};

export const special = () => {
  return (
    <Grass
      data={[
        { date: new Date(2022, 8, 10), type: '1', amount: 37 },
        { date: new Date(2022, 8, 10), type: '2', amount: 60 },
        { date: new Date(2022, 8, 10), type: '3', amount: 37 },
        { date: new Date(2022, 8, 10), type: '4', amount: 60 },
        { date: new Date(2022, 8, 10), type: '5', amount: 23 },
        { date: new Date(2022, 8, 10), type: '6', amount: 60 },
        { date: new Date(2022, 8, 10), type: '7', amount: 23 },
        { date: new Date(2022, 8, 10), type: '8', amount: 37 },
        { date: new Date(2022, 8, 10), type: '9', amount: 60 },
        { date: new Date(2022, 8, 10), type: '10', amount: 37 },
        { date: new Date(2022, 8, 10), type: '11', amount: 60 },
        { date: new Date(2022, 8, 10), type: '12', amount: 23 },
        { date: new Date(2022, 8, 10), type: '13', amount: 60 },
        { date: new Date(2022, 8, 10), type: '14', amount: 23 },
        { date: new Date(2022, 8, 10), type: '15', amount: 60 },
        { date: new Date(2022, 8, 10), type: '16', amount: 23 },
        { date: new Date(2022, 8, 10), type: '17', amount: 37 },
        { date: new Date(2022, 8, 10), type: '18', amount: 60 },
        { date: new Date(2022, 8, 10), type: '19', amount: 23 },
        { date: new Date(2022, 8, 10), type: '20', amount: 60 },
        { date: new Date(2022, 8, 10), type: '21', amount: 23 },
        { date: new Date(2022, 8, 10), type: '22', amount: 60 },
        { date: new Date(2022, 8, 10), type: '23', amount: 23 },
      ]}
    ></Grass>
  );
};
