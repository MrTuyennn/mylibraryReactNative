import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BoxAnimated from 'components/Reanimated/BoxAnimated';
import {ROUT_KEY} from 'constants/constanst';
import React from 'react';
import IntroReanimated from 'components/Reanimated/IntroReanimated';
import PanGestureHandler from 'components/Reanimated/PanGestureHandler';
import BottomSheetModal from 'components/Reanimated/BottomSheetModal';
import HomeScreen from 'screens/HomeScreen';
import BottomSheetWithFlatList from 'components/Reanimated/BottomSheetWithFlatList';
interface Props {}

const Stack = createStackNavigator();

const AppNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={ROUT_KEY.HomeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
