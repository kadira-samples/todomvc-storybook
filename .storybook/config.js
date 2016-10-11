import { configure } from '@kadira/storybook';

import 'todomvc-app-css/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
