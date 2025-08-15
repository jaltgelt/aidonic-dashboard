import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { BarChart3, ArrowLeft } from 'lucide-react-native';
import { RootStackParamList } from './types';
import DistributionListContainer from '../features/distributions/containers/DistributionListContainer';
import DistributionDetailsContainer from '../features/distributions/containers/DistributionDetailsContainer';
import AnalyticsContainer from '../features/analytics/containers/AnalyticsContainer';

const Stack = createStackNavigator<RootStackParamList>();

// Constants for consistent styling
const HEADER_BUTTON_STYLE: ViewStyle = {
  backgroundColor: '#f1f5f9',
  padding: 8,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#e2e8f0',
};

const HEADER_MARGINS = {
  left: 24,
  right: 16,
  titleLeft: 16,
};

const AppNavigator: React.FC = () => {
  const HeaderButton = ({ 
    onPress, 
    icon, 
    position = 'right' 
  }: { 
    onPress: () => void; 
    icon: React.ReactNode; 
    position?: 'left' | 'right';
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...HEADER_BUTTON_STYLE,
        marginLeft: position === 'left' ? HEADER_MARGINS.left : undefined,
        marginRight: position === 'right' ? HEADER_MARGINS.right : undefined,
      }}
      activeOpacity={0.7}
    >
      {icon}
    </TouchableOpacity>
  );

  const CustomBackButton = ({ navigation }: { navigation: any }) => (
    <HeaderButton
      onPress={() => navigation.goBack()}
      icon={<ArrowLeft size={20} color="#3f4756" />}
      position="left"
    />
  );

  return (
    <Stack.Navigator
      initialRouteName="DistributionList"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#f8fafc',
        },
        headerTintColor: '#1e293b',
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerTitleContainerStyle: {
          marginLeft: HEADER_MARGINS.titleLeft,
        },
        headerLeft: () => <CustomBackButton navigation={navigation} />,
      })}
    >
      <Stack.Screen
        name="DistributionList"
        component={DistributionListContainer}
        options={({ navigation }) => ({
          title: 'Aid Distributions',
          headerLeft: undefined, // No back button on initial screen
          headerTitleContainerStyle: {
            marginLeft: HEADER_MARGINS.left, // Use same margin as back button for consistency
          },
          headerRight: () => (
            <HeaderButton
              onPress={() => navigation.navigate('Analytics')}
              icon={<BarChart3 size={20} color="#3f4756" />}
              position="right"
            />
          ),
        })}
      />
      <Stack.Screen
        name="DistributionDetails"
        component={DistributionDetailsContainer}
        options={{ title: 'Distribution Details' }}
      />
      <Stack.Screen name="Analytics" component={AnalyticsContainer} options={{ title: 'Analytics' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
