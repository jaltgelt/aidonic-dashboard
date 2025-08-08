'use client';

import React from 'react';
import { cn } from '@aidonic/shared/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ className, children, ...props }) => {
  return (
    <table className={cn('w-full caption-bottom text-sm', className)} {...props}>
      {children}
    </table>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({ className, children, ...props }) => {
  return (
    <thead className={cn('[&_tr]:border-b', className)} {...props}>
      {children}
    </thead>
  );
};

const TableBody: React.FC<TableBodyProps> = ({ className, children, ...props }) => {
  return (
    <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props}>
      {children}
    </tbody>
  );
};

const TableRow: React.FC<TableRowProps> = ({ className, children, ...props }) => {
  return (
    <tr
      className={cn(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

const TableHead: React.FC<TableHeadProps> = ({ className, children, ...props }) => {
  return (
    <th
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};

const TableCell: React.FC<TableCellProps> = ({ className, children, ...props }) => {
  return (
    <td className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props}>
      {children}
    </td>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
