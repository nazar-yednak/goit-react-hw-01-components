import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableRow,
  TableRowItem,
} from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableRowItem>{item.type}</TableRowItem>
            <TableRowItem>{item.amount}</TableRowItem>
            <TableRowItem>{item.currency}</TableRowItem>
          </TableRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
