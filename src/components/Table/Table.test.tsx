import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableCell, TableRow } from './Table';

describe('Table Component', () => {
  test('renders table and is visible', () => {
    render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    const tableElement = screen.getByTestId('table-component');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { rerender } = render(
      <Table disabled={false}>
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    const tableElement = screen.getByTestId('table-component');
    const enabledStyle = window.getComputedStyle(tableElement);

    rerender(
      <Table disabled={true}>
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    const disabledStyle = window.getComputedStyle(tableElement);

    expect(enabledStyle.backgroundColor).not.toBe(
      disabledStyle.backgroundColor,
    );
    expect(tableElement).toHaveStyle('cursor: not-allowed');
  });
});
