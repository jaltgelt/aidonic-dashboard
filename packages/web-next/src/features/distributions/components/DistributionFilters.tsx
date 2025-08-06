'use client';

import React from 'react';
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
}

const Filters: React.FC<FiltersProps> = ({
  regions,
  statuses,
  selectedRegion,
  selectedStatus,
  onRegionChange,
  onStatusChange,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">Region</label>
          <Select value={selectedRegion} onValueChange={onRegionChange}>
            <SelectTrigger className="w-64 bg-white border border-input">
              <SelectValue placeholder="Select Region" />
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

        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">Status</label>
          <Select value={selectedStatus} onValueChange={onStatusChange}>
            <SelectTrigger className="w-64 bg-white border border-input">
              <SelectValue placeholder="Select Status" />
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
      </div>
    </div>
  );
};

export default Filters;
