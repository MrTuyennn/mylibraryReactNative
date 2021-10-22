import ButtonFacebook from 'components/Button/ButtonFacebook';
import ButtonGoogle from 'components/Button/ButtonGoogle';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
} from 'react-native-fbsdk-next';

interface Props {}

const SocailFirebase = (props: Props) => {
  async function onGoogleButtonPress() {
    //  logout user

    GoogleSignin.signOut();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const firebaseCredential = await auth().signInWithCredential(
      googleCredential,
    );
    const tokenId = await firebaseCredential.user.getIdToken();

    console.log('firebaseCredential', tokenId);
  }

  async function onFacebookButtonPress() {
    LoginManager.logOut();
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const currentToken = await AccessToken.getCurrentAccessToken();
    if (!currentToken) {
      throw 'Something went wrong obtaining access token';
    }
    console.log('currentToken', JSON.stringify(currentToken, null, 2));
    // Create a Firebase credential with the AccessToken
    const credential = await auth.FacebookAuthProvider.credential(
      currentToken.accessToken,
    );
    console.log('credential', JSON.stringify(credential, null, 2));
    const firebaseCredential = await auth().signInWithCredential(credential);
    console.log(
      'firebaseCredential',
      JSON.stringify(firebaseCredential, null, 2),
    );
    const idToken = await firebaseCredential.user.getIdToken();
    console.log('idToken', idToken);
  }
  return (
    <View style={styles.container}>
      <ButtonGoogle onPress={() => onGoogleButtonPress()} />
      <ButtonFacebook onPress={() => onFacebookButtonPress()} />
    </View>
  );
};

export default SocailFirebase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
