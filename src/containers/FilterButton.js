import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const FilterButton = (props) => (
  <Button
    onClick={() => {
      props.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })
    }}
    disabled={props.currentFilter === props.filter}
    style={{ marginLeft: '4px' }}
  >
    {props.children}
  </Button>
);

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentFilter: state.visibilityFilter
  }
};

export default connect(mapStateToProps)(FilterButton);

