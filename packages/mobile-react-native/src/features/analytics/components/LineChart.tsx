import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart as RNChartKitLineChart } from 'react-native-chart-kit';
import { CHART_COLORS } from '@aidonic/shared/constants';

interface LineChartProps {
  data: Array<{ x: string; y: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth - 80; // Más padding para evitar que las líneas lleguen al margen

  const chartData = {
    labels: data.map(item => item.x),
    datasets: [
      {
        data: data.map(item => item.y),
        color: () => CHART_COLORS.primary,
        strokeWidth: 3,
      },
    ],
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 280 }}>
      <RNChartKitLineChart
        data={chartData}
        width={chartWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => CHART_COLORS.primary,
          labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffffff',
          },
          propsForBackgroundLines: {
            strokeDasharray: '3,3',
            stroke: '#e2e8f0',
            strokeWidth: 1,
          },
        }}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        withVerticalLines={false}
        withHorizontalLines={true}
        segments={4}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChart;
