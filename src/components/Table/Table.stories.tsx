import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table, TableCell, TableFooter, TableHeader, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Email</TableCell>
          <TableCell isHeader>Role</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell isHeader>Total: 2 users</TableCell>
          <TableCell isHeader></TableCell>
          <TableCell isHeader></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Name</TableCell>
          <TableCell isHeader>Email</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </tbody>
    </Table>
  ),
  args: {
    disabled: true,
  },
};
