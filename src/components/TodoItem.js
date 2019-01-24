import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const TodoItem = ({ onClick, completed, text }) => (
  <div
    onClick={onClick}
    style={{
      cursor: 'pointer',
      padding: '12px 24px',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Checkbox checked={completed} onChange={onClick} />
    <span style={{ paddingLeft: 16 }}>{text}</span>
  </div>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;

