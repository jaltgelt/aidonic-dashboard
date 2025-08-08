'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package } from 'lucide-react';
import { Distribution } from '@aidonic/shared/types';
import { formatDate, formatNumber } from '@aidonic/shared/utils';

interface DistributionDetailsProps {
  distribution: Distribution;
}

const DistributionDetails: React.FC<DistributionDetailsProps> = ({ distribution }) => {
  return (
    <>
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
          <Package className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
          Aid Distribution Details
        </h1>
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-table-border p-6 shadow-sm">
        <div className="space-y-6">
          {/* Primary Information - Always in grid for better scanning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Region</p>
              <p className="text-lg font-semibold text-foreground">{distribution.region}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Date</p>
              <p className="text-lg font-semibold text-foreground">
                {formatDate(distribution.date)}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
              <p className="text-lg font-semibold text-foreground">{distribution.status}</p>
            </div>
          </div>

          {/* Secondary Information - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Aid Type</p>
              <p className="text-lg font-semibold text-foreground">{distribution.aidType}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Delivery Channel</p>
              <p className="text-lg font-semibold text-foreground">
                {distribution.deliveryChannel}
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-muted-foreground mb-1">Total Beneficiaries</p>
              <p className="text-lg font-semibold text-foreground">
                {formatNumber(distribution.beneficiaries)}
              </p>
            </div>
          </div>

          {/* Total Beneficiaries - Separate row for smaller screens */}
          <div className="md:hidden">
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Beneficiaries</p>
            <p className="text-lg font-semibold text-foreground">
              {formatNumber(distribution.beneficiaries)}
            </p>
          </div>

          {/* Beneficiary List - Full width for better readability */}
          {distribution.beneficiaryList && distribution.beneficiaryList.length > 0 ? (
            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Beneficiary List</p>
              <div className="bg-muted/20 rounded-md p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {distribution.beneficiaryList.map((beneficiary, index) => (
                    <p key={beneficiary.id} className="text-foreground text-sm">
                      {index + 1}. {beneficiary.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-muted-foreground mb-3">Beneficiary List</p>
              <div className="bg-muted/20 rounded-md p-4">
                <p className="text-foreground text-sm">No beneficiary details available</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DistributionDetails;
