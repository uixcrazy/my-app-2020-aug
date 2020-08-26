import React from 'react';
import DemoBasic from './DemoBasic';
import DemoChangeBackdropBackgroundCaroStyled, {
  DemoDefaultBackdropBackground,
} from './DemoChangeBackdropBackground';

export default {
  title: 'base-components/Dialog',
  // includeStories: [
  //   'Basic',
  //   'DefaultBackdropBackground',
  //   'ChangeBackdropBackground',
  // ],
};

export const Basic = () => <DemoBasic />;
export const DefaultBackdropBackground = () => <DemoDefaultBackdropBackground />;
export const ChangeBackdropBackground = () => (
  <DemoChangeBackdropBackgroundCaroStyled />
);
