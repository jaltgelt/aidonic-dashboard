import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import DistributionListScreen from '../screens/DistributionListScreen';
import DistributionDetailsScreen from '../screens/DistributionDetailsScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

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
        component={DistributionListScreen}
        options={{ title: 'Aid Distributions' }}
      />
      <Stack.Screen
        name="DistributionDetails"
        component={DistributionDetailsScreen}
        options={{ title: 'Distribution Details' }}
      />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Analytics' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
