/**
 * not press Formart Document
 */
import React from 'react';
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter } from 'react-table';
import matchSorter from 'match-sorter';

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      type="text"
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}
// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;

function Table({ columns, data, sortBy, defaultPageSize=10, showPagination=true }) {

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  // const state = useTableState({ sortBy: sortBy ? sortBy : [] })
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: sortBy ? sortBy : [],
        pageSize: defaultPageSize,
      },
      disableSortRemove: true,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

  return (
    <>
      <div className="table-wrapper">
        <table {...getTableProps()} className="table-default">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => {
                  return (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th key={index}>
                      <div
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="noselect"
                      >
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span className="wait-sort">
                          {column.isSorted
                            ? column.isSortedDesc
                              ? <span className="ml-5">↑</span>
                              : <span className="ml-5">↓</span>
                              // ? <span className="sort desc"/>
                              // : <span className="sort asc"/>
                            : ''}
                        </span>
                      </div>
                      {/* Render the columns filter UI */}
                      <div>{column.enableFiltering ? column.render('Filter') : null}</div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {page.map(
              (row, i) =>
                prepareRow(row) || (
                  <tr {...row.getRowProps()}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>

      {showPagination
        ? <div className="pagination">
          <div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'⇤'}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'prev'}
            </button>
            <span className="pagination-info">
              Page&nbsp;
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'next'}
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'⇥'}
            </button>
          </div>
          <div>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        : ""
      }
    </>
  )
}

export default Table;
