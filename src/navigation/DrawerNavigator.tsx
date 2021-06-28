import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import {ROUT_KEY} from 'constants/constanst';
import AccountScreen from 'screens/AccountScreen';
import BaseScreen from 'components/Header/BaseScreen';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return <BaseScreen appBar={{
      onlytitle: false,
      title: '__tuyennn',
      titleCenter: false
  }}></BaseScreen>
};

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
    //   openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : {width: '100%'}}
      overlayColor="transparent"
      drawerPosition={'right'}
        // @ts-ignore
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={ROUT_KEY.AccountScreen} component={AccountScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
