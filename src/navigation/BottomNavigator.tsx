import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  IconHeart,
  IconHeartWhite,
  IconHome,
  IconHomeWhite,
  IconPost,
  IconSearchBlack,
  IconSearchWhite,
} from 'assets';
import {ROUT_KEY} from 'constants/constanst';
import {IMAGEPATH} from 'constants/imageConstanst';
import {FS, ptColor} from 'constants/style';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native-elements';
import AccountScreen from 'screens/AccountScreen';
import HomeScreen from 'screens/HomeScreen';
import NotfiScreen from 'screens/NotfiScreen';
import PostScreen from 'screens/PostScreen';
import SearchScreen from 'screens/SearchScreen';
import DrawerNavigator from './DrawerNavigator';
interface Props {}
const Tab = createBottomTabNavigator();
const BottomNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={ROUT_KEY.HomeScreen}
      screenOptions={({route}) => ({
        tabBarLabel: '',
        tabBarIcon: ({focused, color}) => {
          if (route.name === ROUT_KEY.HomeScreen) {
            return <>{focused ? <IconHome /> : <IconHomeWhite />}</>;
          } else if (route.name === ROUT_KEY.SearchScreen) {
            return (
              <>
                {focused ? (
                  <IconSearchBlack color={ptColor.black} />
                ) : (
                  <IconSearchWhite />
                )}
              </>
            );
          } else if (route.name === ROUT_KEY.PostScreen) {
            return <IconPost />;
          } else if (route.name === ROUT_KEY.NotfiScreen) {
            return (
              <>
                {focused ? (
                  <IconHeart color={ptColor.black} />
                ) : (
                  <IconHeartWhite />
                )}
              </>
            );
          } else if (route.name === ROUT_KEY.DrawerNavigator) {
            return (
              <View
                style={[
                  styles.ContainerImg,
                  {borderColor: focused ? ptColor.black : ptColor.white},
                ]}>
                <Image
                  source={IMAGEPATH.imageProfile}
                  style={styles.styleImg}
                />
              </View>
            );
          }
        },
      })}
      tabBarOptions={{
        style: {
          alignItems: 'center',
          justifyContent: 'center',
          padding: FS(10),
          // height: 40 * HEIGHT_SCALE_RATIO,
        },
      }}>
      <Tab.Screen name={ROUT_KEY.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ROUT_KEY.SearchScreen} component={SearchScreen} />
      <Tab.Screen name={ROUT_KEY.PostScreen} component={PostScreen} />
      <Tab.Screen name={ROUT_KEY.NotfiScreen} component={NotfiScreen} />
      <Tab.Screen name={ROUT_KEY.DrawerNavigator} component={DrawerNavigator} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  ContainerImg: {
    height: 25,
    width: 25,
    borderRadius: 25,
    borderWidth: 0.5,
  },
  styleImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
});
