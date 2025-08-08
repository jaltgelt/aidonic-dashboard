'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Distribution } from '@aidonic/shared/types';
import { formatDate, formatNumber } from '@aidonic/shared/utils';
import { useQueryClient } from '@tanstack/react-query';
import { distributionApi } from '@aidonic/shared/api';

interface DistributionTableProps {
  distributions: Distribution[];
}

const DistributionTable: React.FC<DistributionTableProps> = ({ distributions }) => {
  const queryClient = useQueryClient();

  const handlePrefetch = (distributionId: string) => {
    queryClient.prefetchQuery({
      queryKey: ['distribution', distributionId],
      queryFn: () => distributionApi.getDistributionById(distributionId),
      staleTime: 5 * 60 * 1000,
    });
  };

  return (
    <Table className="min-w-[800px]">
      <TableHeader>
        <TableRow className="border-b border-table-border bg-table-header">
          <TableHead className="font-semibold text-foreground py-4 px-6 text-left whitespace-nowrap">
            Region
          </TableHead>
          <TableHead className="font-semibold text-foreground py-4 px-6 text-left whitespace-nowrap">
            Date
          </TableHead>
          <TableHead className="font-semibold text-foreground py-4 px-6 text-left whitespace-nowrap">
            Status
          </TableHead>
          <TableHead className="font-semibold text-foreground py-4 px-6 text-left whitespace-nowrap">
            Beneficiaries
          </TableHead>
          <TableHead className="font-semibold text-foreground py-4 px-6 text-left whitespace-nowrap">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {distributions.length > 0 ? (
          distributions.map((distribution) => (
            <TableRow
              key={distribution.id}
              className="border-b border-table-border hover:bg-muted/30 transition-colors"
            >
              <TableCell className="py-4 px-6 text-foreground font-medium">
                {distribution.region}
              </TableCell>
              <TableCell className="py-4 px-6 text-foreground">
                {formatDate(distribution.date)}
              </TableCell>
              <TableCell className="py-4 px-6 text-foreground">{distribution.status}</TableCell>
              <TableCell className="py-4 px-6 text-foreground">
                {formatNumber(distribution.beneficiaries)}
              </TableCell>
              <TableCell className="py-4 px-6">
                <Link
                  href={`/distributions/${distribution.id}`}
                  onMouseEnter={() => handlePrefetch(distribution.id)}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="py-12 px-6 text-center">
              <div className="text-muted-foreground">
                <p className="text-lg font-medium mb-2">No distributions found</p>
                <p className="text-sm">
                  Try adjusting your filters or clear them to see all results.
                </p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DistributionTable;
