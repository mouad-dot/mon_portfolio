/**
 * Metric Display Component - Performance Indicators
 * @module components/atoms/MetricDisplay
 */

import React from 'react';
import { PerformanceMetric } from '../../types/common.types';
import { t, getLanguage } from '../../lib/i18n';

interface MetricDisplayProps {
  metric: PerformanceMetric;
  variant?: 'compact' | 'detailed';
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  metric,
  variant = 'compact'
}) => {
  const lang = getLanguage();

  if (variant === 'compact') {
    return (
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-400">
          {metric.value}{metric.unit}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {t(metric.label, lang)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
      <div className="text-sm text-gray-400">
        {t(metric.label, lang)}
      </div>
      <div className="text-lg font-bold text-blue-400">
        {metric.value}{metric.unit}
      </div>
    </div>
  );
};

