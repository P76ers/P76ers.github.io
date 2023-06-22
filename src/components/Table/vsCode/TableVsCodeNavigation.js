import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import Data from './Navigation.json';
import { GlobalFilter } from '../GlobalFilter';
import { ColumnFilter } from '../ColumnFilter';

export const TableVsCodeNavigation = () => {
  const COLUMNS = [
    {
      Header: 'Description',
      accessor: 'description',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Windows',
      accessor: 'windows',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'MacOs',
      accessor: 'macos',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'Linux',
      accessor: 'linux',
      Filter: ColumnFilter,
      sortType: (prev, curr, columnId) => {
        return sortItems(prev, curr, columnId);
      },
    },
    {
      Header: 'MyShortcut',
      accessor: 'myshortcut',
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
        id: 'description',
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

export default TableVsCodeNavigation;
