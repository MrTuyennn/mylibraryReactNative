import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {ROUT_KEY} from 'constants/constanst';
import BottomNavigator from 'navigation/BottomNavigator';
import DrawerNavigator from 'navigation/DrawerNavigator';
import SyncedFlatList from 'comom/SyncedFlatList'
import CarouselFlatlist from 'comom/CarouselFlatlist'
import ItemOpaFlatlist from 'comom/ItemOpaFlatlist'
import TouManFlatList from 'comom/TouManFlatList'
import CardContext from 'context/CardContext'
import MenuTopNavigator from 'navigation/MenuTopNavigator'
import React from 'react';
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
        name={ROUT_KEY.TouManFlatList}
        component={TouManFlatList}
      />
      {/* <Stack.Screen
        name={ROUT_KEY.DrawerNavigator}
        component={DrawerNavigator}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
