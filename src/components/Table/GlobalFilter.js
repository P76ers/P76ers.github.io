import React from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <span>
        Search:{''}
        <input
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
