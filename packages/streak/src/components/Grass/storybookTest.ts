import { Grass } from './index';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

const month = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

export function runTest(
  story: ComponentStory<typeof Grass>
): ComponentStory<typeof Grass> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    // <Grass /> render <text>${month}</text>
    month.forEach((m) => {
      const text = canvas.getByText(m);
      expect(text).toHaveTextContent(m);
    });

    // <Grass /> render <rect></rect>
    const rect = canvasElement.querySelectorAll(
      'rect'
    ) as NodeListOf<SVGRectElement>;

    expect(rect.length).toBe(365);

    story.play = async ({ args, canvasElement }) => {
      const rect = canvasElement.querySelectorAll(
        'rect'
      ) as NodeListOf<SVGRectElement>;
      rect.forEach(async (r) => {
        await userEvent.click(r);
        await expect(args.onClickDay).toHaveBeenCalled();
      });
    };
  };

  return story;
}
