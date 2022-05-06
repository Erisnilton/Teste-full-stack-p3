import React from "react";
import Classnames from "classnames";
import "./style.css";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  TableContainer,
  Th,
} from "@chakra-ui/react";

export interface CustomTableHeader {
  id: string;
  text: String;
  class?: any;
  get(item: any): any
}

export interface CustomTableProps {
  columns: CustomTableHeader[]
  rows: any[],
  variant?: string
}

export default function CustomTable({ columns, rows, variant }: CustomTableProps) {
  return (
    <TableContainer>
      <Table variant={variant}>
        <Thead>
          {columns.map((col) => {
            return (
              <Th key={col.id} className={Classnames(col.class)}>
                {col.text}
              </Th>
            );
          })}
        </Thead>
        <Tbody>
          {rows.map((item) => {
            return <Tr key={item.id}>
              {columns.map((col) => {
                return (<td>{col.get(item)}</td>)
              })
              }
            </Tr>
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
