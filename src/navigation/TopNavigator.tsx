import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IconChanel from 'assets/svgs/IconChanel';
import IconMorePost from 'assets/svgs/IconMorePost';
import IconTagged from 'assets/svgs/IconTagged';
import {ROUT_KEY} from 'constants/constanst';
import {ptColor} from 'constants/style';
import React from 'react';
import ScreeenITV from 'screens/screensAccount/ScreenITV';
import ScreenPost from 'screens/screensAccount/ScreenPost';
import ScreenTagged from 'screens/screensAccount/ScreenTagged';

const Tab = createMaterialTopTabNavigator();

interface Props {}
const TopNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={ROUT_KEY.ScreenPost}
      screenOptions={({route}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, color}) => {
          if (route.name === ROUT_KEY.ScreenPost) {
            return (
              <IconMorePost
                color={focused ? ptColor.black : ptColor.textPlaceholderColor}
              />
            );
          } else if (route.name === ROUT_KEY.ScreenITV) {
            return (
              <IconChanel
                color={focused ? ptColor.black : ptColor.textPlaceholderColor}
              />
            );
          } else if (route.name === ROUT_KEY.ScreenTagged) {
            return (
              <IconTagged
                color={focused ? ptColor.black : ptColor.textPlaceholderColor}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: ptColor.white,
        indicatorStyle: {
          backgroundColor: ptColor.black,
        },
        indicatorContainerStyle: {
          bottom: -1,
        },
        labelStyle: {fontSize: 12},
        style: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0.5,
          borderColor: ptColor.textPlaceholderColor,
        },
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen name={ROUT_KEY.ScreenPost} component={ScreenPost} />
      <Tab.Screen name={ROUT_KEY.ScreenITV} component={ScreeenITV} />
      <Tab.Screen name={ROUT_KEY.ScreenTagged} component={ScreenTagged} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
