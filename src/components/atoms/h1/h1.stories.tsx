import React from 'react';
import { TextProps } from 'react-native';
import type { Meta, StoryFn } from '@storybook/react';
import { H1 } from './h1';

type H1Props = TextProps

export default {
  title: 'Typography/H1',
  component: H1,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof H1>;

export const Component: StoryFn<H1Props> = ({
  children,
  ...args
}) => {return (<H1 {...args}>{children}</H1>)};

Component.args = {
  children: 'Text',
};
Component.storyName = 'H1';