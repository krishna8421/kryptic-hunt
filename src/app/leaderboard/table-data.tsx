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
  
  const rankedData = data.map((row) => ({ ...row, rank: 0 }))
  rankedData.sort((a, b) => b.count - a.count);
  rankedData.forEach((row, index) => {
    row.rank = index + 1; // Start ranks from 1
  });

  return (
    <Table aria-label="Leaderboard table">
      <TableHeader>
        <TableColumn>Rank</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Level</TableColumn>
      </TableHeader>
      <TableBody>
        {rankedData.map((row) => (
          <TableRow key={row.index}>
            <TableCell>{row.rank}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
