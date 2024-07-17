import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
      <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</button>
      <button className={filter === 'Not Completed' ? 'active' : ''} onClick={() => setFilter('Not Completed')}>Not Completed</button>
    </div>
  );
};

export default Filter;
