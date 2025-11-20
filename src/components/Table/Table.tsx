import React from 'react';
import styled from 'styled-components';
import {
  TableCellProps,
  TableFooterProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from './Table.types';

// Main Table
const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f0f0f0' : backgroundColor || '#ffffff'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table: React.FC<TableProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => {
  return (
    <StyledTable
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-component"
    >
      {children}
    </StyledTable>
  );
};

// Table Header
const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d0d0d0' : backgroundColor || '#f8f9fa'};
  font-weight: bold;
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableHeader
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-header-component"
    >
      {children}
    </StyledTableHeader>
  );
};

// Table Row
const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e8e8e8' : backgroundColor || 'transparent'};
  border-bottom: 1px solid #dee2e6;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#e8e8e8' : '#f5f5f5')};
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableRow
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-row-component"
    >
      {children}
    </StyledTableRow>
  );
};

// Table Cell
const StyledTableCell = styled.td<TableCellProps>`
  padding: 12px;
  text-align: left;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const StyledTableHeaderCell = styled.th<TableCellProps>`
  padding: 12px;
  text-align: left;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  backgroundColor,
  disabled = false,
  children,
  isHeader = false,
}) => {
  if (isHeader) {
    return (
      <StyledTableHeaderCell
        backgroundColor={backgroundColor}
        disabled={disabled}
        data-testid="table-cell-component"
      >
        {children}
      </StyledTableHeaderCell>
    );
  }

  return (
    <StyledTableCell
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-cell-component"
    >
      {children}
    </StyledTableCell>
  );
};

// Table Footer
const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d0d0d0' : backgroundColor || '#f8f9fa'};
  font-weight: bold;
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  backgroundColor,
  disabled = false,
  children,
}) => {
  return (
    <StyledTableFooter
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="table-footer-component"
    >
      {children}
    </StyledTableFooter>
  );
};
