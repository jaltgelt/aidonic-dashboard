import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import DistributionListContainer from '../features/distributions/containers/DistributionListContainer';
import DistributionDetailsContainer from '../features/distributions/containers/DistributionDetailsContainer';
import AnalyticsScreen from '../features/analytics/pages/AnalyticsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="DistributionList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8fafc',
        },
        headerTintColor: '#1e293b',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen
        name="DistributionList"
        component={DistributionListContainer}
        options={{ title: 'Aid Distributions' }}
      />
      <Stack.Screen
        name="DistributionDetails"
        component={DistributionDetailsContainer}
        options={{ title: 'Distribution Details' }}
      />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Analytics' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
