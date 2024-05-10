import React from 'react'
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import {
  Table,
  Paper,
  Stack,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableContainer,
} from "@mui/material";
import { SearchField } from '.';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
export const ReactTable = ({ disableSearch, columns = [], data = [],onEdit }) => {
  const {
    prepareRow,
    getTableProps,
    getTableBodyProps,
    state,
    rows,
    headerGroups,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;
  return (
    <Stack sx={{ backgroundColor: "#FFFFFF",padding:"16px",borderRadius:"6px" }}>
      <Stack
        mt={2}
        gap={2}
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {!disableSearch && (
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <SearchField
              onChange={(e) => setGlobalFilter(e.target.value)}
              value={globalFilter}
            />
          </Stack>
        )}
      </Stack>
      <TableContainer component={Paper} sx={{ mt: 2, mb: "30px" }}>
        <Table
          {...getTableProps()}
          sx={{
            padding: 0,
            px: 2,
            border: "1px solid #E5E5E5",
            boxShadow: "none",
          }}
        >
          <TableHead sx={{ padding: "5px" }}>
            {headerGroups.map((headerGroup) => (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: 0 }}
              >
                {headerGroup.headers.map((column) => {
                  const { isNotVisible, id } = column;

                  return (
                    !isNotVisible && (
                      <TableCell
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        sx={{
                          padding: "16px",
                          fontSize: "15px !important",
                        }}
                        key={column.id}
                      >
                        <div style={{ display: "flex", alignItems: "center" ,gap:"8px" }}>
                          {!isNotVisible && column.render("Header")}
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              " 🔽"
                            ) : (
                              " 🔼"
                            )
                          ) : (
                            <UnfoldMoreIcon />
                          )}
                        </div>
                      </TableCell>
                    )
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    overflow: "auto",
                  }}
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, index) => {
                prepareRow(row);
                return (
                  <>
                    <TableRow {...row.getRowProps()} key={row.id}>
                      {row.cells.map((cell) => {
                        const { isEditCondition, isNotVisible, fontSize } =
                          cell?.column || {};
                        const { original: { active } = {} } = cell?.row || {};
                        const isEditable = isEditCondition && active && onEdit;

                        const { props } = cell.render("Cell");
                        return (
                          !isNotVisible && (
                            <TableCell
                              {...cell.getCellProps()}
                              sx={{
                                padding: 2,
                                fontSize,
                                borderBottom: 1,
                                borderColor: "#e1e2ec",
                                width: cell?.column?.row_Width,
                                cursor: isEditCondition
                                  ? isEditable
                                    ? "pointer"
                                    : "not-allowed"
                                  : onEdit
                                  ? "pointer"
                                  : "",
                                color:
                                  isEditCondition &&
                                  !active &&
                                  "rgba(0, 0, 0, 0.38)",
                              }}
                              onClick={() => {
                                if (
                                  props?.column?.Header !== "Action" &&
                                  onEdit
                                ) {
                                  onEdit(cell);
                                }
                              }}
                              key={cell.column.id}
                            >
                              {!isNotVisible && cell.render("Cell")}
                            </TableCell>
                          )
                        );
                      })}
                    </TableRow>
                  </>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
