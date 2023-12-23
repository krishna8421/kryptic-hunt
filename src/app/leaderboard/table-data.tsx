"use client";

import { ITableData } from "./page";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface TableDataProps {
  data: ITableData[];
}

const TableData = ({ data }: TableDataProps) => {
  return (
    <Table aria-label="Leaderboard table">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Total Submissions</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.index}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
