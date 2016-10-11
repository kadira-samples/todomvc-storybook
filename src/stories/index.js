import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MainSection from '../components/MainSection';

const stories = storiesOf('MainSection', module);

stories.add('with a single todo item', () => (
  <MainSection
    todos={[{id: '1', text: 'Learn React'}]}
    actions={{}}
  />
))
