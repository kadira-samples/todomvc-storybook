import { configure } from '@kadira/storybook';

import 'todomvc-app-css/index.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
