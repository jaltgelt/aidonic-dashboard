'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DISTRIBUTION_CONSTANTS } from '@aidonic/shared/constants';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FiltersProps {
  regions: string[];
  statuses: string[];
  selectedRegion: string;
  selectedStatus: string;
  onRegionChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  regions,
  statuses,
  selectedRegion,
  selectedStatus,
  onRegionChange,
  onStatusChange,
  onReset,
}) => {
  const hasActiveFilters =
    selectedRegion !== DISTRIBUTION_CONSTANTS.DEFAULT_REGION ||
    selectedStatus !== DISTRIBUTION_CONSTANTS.DEFAULT_STATUS;
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-medium text-foreground mb-2">Region</label>
          <Select value={selectedRegion} onValueChange={onRegionChange}>
            <SelectTrigger className="w-full lg:w-64 bg-white border border-input">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-input">
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-medium text-foreground mb-2">Status</label>
          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger className="w-full lg:w-64 bg-white border border-input">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-input">
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="h-10 px-3 border-border hover:bg-muted/50 w-full lg:w-auto"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default Filters;
