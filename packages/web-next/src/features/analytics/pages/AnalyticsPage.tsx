'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/shared/components/Navigation';
import AnalyticsContainer from '../containers/Analytics.container';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-foreground">Distribution Analytics</h1>
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
        <AnalyticsContainer />
      </div>
    </div>
  );
};

export default AnalyticsPage;
