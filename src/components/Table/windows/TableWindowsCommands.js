import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import Data from './commands.json';
import { GlobalFilter } from '../GlobalFilter';
import { ColumnFilter } from '../ColumnFilter';

export const TableWindowsCommands = () => {
  const COLUMNS = [
    {
      Header: 'Designation',
      accessor: 'designation',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Command',
      accessor: 'command',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Description',
      accessor: 'description',
      Filter: ColumnFilter,
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
        id: 'designation',
        asc: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: sortees,
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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
    </>
  );
};

export default TableWindowsCommands;
