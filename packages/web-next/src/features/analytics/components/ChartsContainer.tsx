'use client';

import React from 'react';
import AidTypePieChart from './AidTypePieChart';
import BeneficiariesLineChart from './BeneficiariesLineChart';
import { AidTypeDataPoint, TimeSeriesDataPoint } from '@aidonic/shared/hooks';
import { CHART_TITLES } from '@aidonic/shared/constants';

interface ChartsContainerProps {
  aidTypeData: AidTypeDataPoint[];
  timeSeriesData: TimeSeriesDataPoint[];
}

const ChartsContainer: React.FC<ChartsContainerProps> = ({ aidTypeData, timeSeriesData }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border border-table-border p-6 shadow-sm focus:outline-none">
          <h2 className="text-xl font-semibold text-foreground mb-6">{CHART_TITLES.AID_DISTRIBUTION_BY_TYPE}</h2>
          <div className="h-80 focus:outline-none">
            <AidTypePieChart data={aidTypeData} />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-table-border p-6 shadow-sm focus:outline-none">
          <h2 className="text-xl font-semibold text-foreground mb-6">{CHART_TITLES.BENEFICIARIES_OVER_TIME}</h2>
          <div className="h-80 focus:outline-none">
            <BeneficiariesLineChart data={timeSeriesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
