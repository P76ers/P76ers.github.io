import React from 'react';

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
      }}
    >
      <span>
        Search:{''}
        <input
          className="TableInputGlobal"
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
  );
};

export default GlobalFilter;
