import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import TodoItem from '../components/TodoItem';
import { visibilityFilters } from '../actions';
import AddTodo from './AddTodo';

const TodoList = (props) => {
  return (
    <List
      bordered
      dataSource={props.todos}
      header={<AddTodo />}
      renderItem={
        (todo) => {
          return (
            <TodoItem
              onClick={() => {
                props.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id, 
                });
              }}
              {...todo}
            />
          )
        }
      }
      style={{ marginTop: 24 }}
    />
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

export default connect(
  mapStateToProps,
)(TodoList);
