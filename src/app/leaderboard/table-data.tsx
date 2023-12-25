"use client";

import { FaTableColumns } from "react-icons/fa6";
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

interface ITableData {
  rank: number;
  name: string;
  count: number;
}

const ITableData = ({ data }: TableDataProps) => {
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
            <TableCell>{row.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableData;
