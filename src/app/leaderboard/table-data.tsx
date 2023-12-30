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
        <TableColumn>Rank</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Level</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.rank}>
            <TableCell>{row.rank}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.count + 1}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
