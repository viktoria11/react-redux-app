import React from 'react';

import VisibleTodoList from '../containers/VisibleTodoList';
import BasicLayout from './BasicLayout';
import Filters from './Filters';

const App = () => (
  <BasicLayout>
    <Filters />
    <VisibleTodoList />
  </BasicLayout>
);

export default App;
