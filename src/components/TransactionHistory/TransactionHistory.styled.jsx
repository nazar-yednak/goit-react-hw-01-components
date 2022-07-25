import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin-left: auto;
  margin-right: auto;

  color: black;
  width: 700px;
  border: 2px;
  border-style: double;
  border-collapse: collapse;
  text-align: center;
  background-color: beige;
`;
export const TableHead = styled.thead`
  border-bottom: 10px;
  background-color: rgba(255, 255, 128, 0.6);
`;
export const TableRow = styled.tr`
  border: 4px solid;
  padding: 20px;
`;

export const TableRowItem = styled.td`
  border: 1px solid gray;
  padding: 5px;
`;
