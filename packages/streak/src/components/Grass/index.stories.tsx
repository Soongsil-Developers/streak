import React from 'react';
import { Grass } from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { runTest } from './storybookTest';

export default {
  title: 'Grass Streak',
  component: Grass,
} as ComponentMeta<typeof Grass>;

const Template: ComponentStory<typeof Grass> = (args) => (
  <Grass onClickDay={action('clicked')} data={args.data} />
);

export const Default = Template.bind({});

Default.args = {
  data: [
    { date: new Date(2022, 8, 10), type: '중앙도서관', amount: 37 },
    { date: new Date(2022, 8, 10), type: '정보과학관', amount: 60 },
    { date: new Date(2022, 8, 10), type: '중앙도서', amount: 37 },
    { date: new Date(2022, 8, 10), type: '정보과학', amount: 60 },
    { date: new Date(2022, 8, 10), type: '한경직기념관', amount: 23 },
    { date: new Date(2022, 8, 10), type: '정보학', amount: 60 },
    { date: new Date(2022, 8, 10), type: '한경직기관', amount: 23 },
  ],
  onClickDay: (data) => console.log(data),
};

runTest(Default);
