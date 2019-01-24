import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import TodoItem from './TodoItem';
import AddTodo from '../containers/AddTodo';

const TodoList = ({ todos, toggleTodo }) => (
  <List
    bordered
    dataSource={todos}
    header={<AddTodo />}
    renderItem={todo => <TodoItem onClick={() => toggleTodo(todo.id)} {...todo} />}
    style={{ marginTop: 24 }}
  />
);

TodoItem.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
};

export default TodoList;

