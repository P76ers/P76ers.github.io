import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import Data from './EnvVariable.json';

export const TableWindowsEnvVariable = () => {
  const COLUMNS = [
    {
      Header: 'SysVar',
      accessor: 'sysvariable',
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'SysVal',
      accessor: 'sysvalue',
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Program',
      accessor: 'program',
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Path',
      accessor: 'pathval',
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const sortItems = (prev, curr, columnId) => {
    if (
      prev.original[columnId].toLowerCase() >
      curr.original[columnId].toLowerCase()
    ) {
      return 1;
    } else if (
      prev.original[columnId].toLowerCase() <
      curr.original[columnId].toLowerCase()
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortees = React.useMemo(
    () => [
      {
        id: 'program',
        asc: true,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: sortees,
        },
      },

      useSortBy
    );

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableWindowsEnvVariable;
