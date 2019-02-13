import React from 'react'
import FilterButton from '../containers/FilterButton'
import { visibilityFilters } from '../actions'
 
const Filters = () => (
  <div>
    <span>Filter: </span>
    <FilterButton filter="SHOW_ALL">
      All
    </FilterButton>
    <FilterButton filter="SHOW_ACTIVE">
      Active
    </FilterButton>
    <FilterButton filter="SHOW_COMPLETED">
      Completed
    </FilterButton>
  </div>
);

export default Filters;
