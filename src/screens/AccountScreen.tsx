import {IconBlock, IconMenuOp, IconPost} from 'assets';
import HeaderAccount from 'comom/HeaderAccount';
import PButtonAc from 'components/Button/PButtonAc';
import BaseScreen from 'components/Header/BaseScreen';
import StoryAccount from 'components/Story/StoryAccount';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopNavigator from 'navigation/TopNavigator';
interface Props {}

const AccountScreen = (props: Props) => {
  return (
    <BaseScreen
      appBar={{
        leftIcon: <IconBlock />,
        title: '___tuyennn',
        titleCenter: false,
        rightIcon2: <IconMenuOp />,
        rightIcon: <IconPost />,
      }}>
      <View style={styles.container}>
        <HeaderAccount />

        <PButtonAc onPress={() => console.log('...')} />

        <View>
          <StoryAccount />
        </View>

        <TopNavigator />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AccountScreen;
