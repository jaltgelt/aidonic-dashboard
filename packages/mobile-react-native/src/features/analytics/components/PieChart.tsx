import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart as RNChartKitPieChart } from 'react-native-chart-kit';
import { getAidTypeColor, CHART_COLORS } from '../../../shared/styles';

interface PieChartProps {
  data: Array<{ x: string; y: number }>;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartSize = Math.min(screenWidth - 40, 300);

  const chartData = data.map((item, index) => ({
    name: item.x,
    population: item.y,
    color: getAidTypeColor(index),
    legendFontColor: '#1e293b',
    legendFontSize: 12,
  }));

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 280 }}>
      <RNChartKitPieChart
        data={chartData}
        width={chartSize}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => CHART_COLORS.primary,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default PieChart;
