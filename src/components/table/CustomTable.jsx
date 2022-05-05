import React from "react";

import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

function TableHeadItem({ item }) {
  return <Td title={item}>{item}</Td>;
}

function TableRow({ data }) {
  return (
    <Tr>
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </Tr>
  );
}

export default function CustomTable({ theadData, tbodyData, variant }) {
  return (
    <TableContainer>
      <Table variant={variant}>
        <Thead>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </Thead>
        <Tbody>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
