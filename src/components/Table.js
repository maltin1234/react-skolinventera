import React from "react";
import styled from "styled-components";
import FilterBox from "./FilterBox";
import { Wrapper } from "./style/Table.styled";
import { TableStyled } from "./style/Table.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import matchSorter from "match-sorter";
import GlobalFilter from "./GlobalFilter";

import {
  useTable,
  useFilters,
  useSortBy,
  useAsyncDebounce,
  useGlobalFilter,
  usePagination,
} from "react-table";

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
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
      initialState: { pageIndex: 0, pageSize: 3 },
    },

    useGlobalFilter,
    usePagination
  );

  return (
    <Wrapper>
      <FilterBox></FilterBox>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      ></GlobalFilter>

      <TableStyled {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[3, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </TableStyled>
    </Wrapper>
  );
}
