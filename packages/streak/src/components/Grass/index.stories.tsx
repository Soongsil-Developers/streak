import React from 'react';
import { Grass } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { runTest } from './storybookTest';

export default {
  title: 'Grass Streak',
  component: Grass,
  argTypes: {
    options: {
      color: { control: { type: 'color', presetColors: ['red', 'green'] } },
    },
  },
} as ComponentMeta<typeof Grass>;

const Template: ComponentStory<typeof Grass> = (args) => (
  <Grass onClickDay={action('clicked')} {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: [
    { date: new Date(2022, 8, 6), type: '베어드홀', amount: 37 },
    { date: new Date(2022, 8, 7), type: '베어드홀', amount: 37 },
    { date: new Date(2022, 8, 7), type: '숭덕경산관', amount: 37 },
    { date: new Date(2022, 8, 7), type: '문화관', amount: 37 },
    { date: new Date(2022, 8, 7), type: '안익태기념관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '형남공학관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '교육관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '백마관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '한경직기념관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '신양관', amount: 37 },
    { date: new Date(2022, 8, 8), type: '벤처중소기업센터', amount: 37 },
    { date: new Date(2022, 8, 8), type: '진리관', amount: 37 },
    { date: new Date(2022, 8, 10), type: '베어드홀', amount: 37 },
    { date: new Date(2022, 8, 10), type: '숭덕경상관', amount: 37 },
    { date: new Date(2022, 8, 10), type: '문화관', amount: 37 },
    { date: new Date(2022, 8, 10), type: '3', amount: 37 },
    { date: new Date(2022, 8, 10), type: '4', amount: 37 },
    { date: new Date(2022, 8, 10), type: '5', amount: 37 },
    { date: new Date(2022, 8, 10), type: '6', amount: 37 },
    { date: new Date(2022, 8, 10), type: '11', amount: 37 },
    { date: new Date(2022, 8, 10), type: '12', amount: 60 },
    { date: new Date(2022, 8, 10), type: '13', amount: 37 },
    { date: new Date(2022, 8, 10), type: '14', amount: 60 },
    { date: new Date(2022, 8, 10), type: '15', amount: 23 },
    { date: new Date(2022, 8, 10), type: '123', amount: 60 },
    { date: new Date(2022, 8, 10), type: '22', amount: 23 },
    { date: new Date(2022, 8, 10), type: '33', amount: 23 },
    { date: new Date(2022, 8, 10), type: '44', amount: 23 },
  ],
  onClickDay: (data) => console.log(data),
  options: {
    color: 'red',
  },
};

runTest(Default);
