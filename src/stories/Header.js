import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from '../components/Header';

const stories = storiesOf('Header', module);

stories.add('default view', () => (
  <Header />
));
