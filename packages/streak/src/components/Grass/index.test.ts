import { Grass } from './index';
import { ComponentStory } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export function runTest(
  story: ComponentStory<typeof Grass>
): ComponentStory<typeof Grass> {
  story.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const rect = canvas.getByRole('rect');

    // click button
    userEvent.click(rect);
    expect(args.onClickDay).toHaveBeenCalled();
  };

  return story;
}
