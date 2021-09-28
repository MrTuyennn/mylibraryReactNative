import React, {useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import {BlurView} from 'expo-blur';
import {BlurView} from '@react-native-community/blur';

function generateTweets(limit: any) {
  return new Array(limit).fill(0).map((_, index) => {
    const repetitions = Math.floor(Math.random() * 3) + 1;

    return {
      key: index.toString(),
      text: 'Lorem ipsum dolor amet '.repeat(repetitions),
      author: 'Arnaud',
      tag: 'eveningkid',
    };
  });
}

const TWEETS = generateTweets(30);
const HEADER_HEIGHT_EXPANDED = 35;
const HEADER_HEIGHT_NARROWED = 90;

const PROFILE_PICTURE_URI =
  'https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg';

const PROFILE_BANNER_URI =
  'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/136759492_2878326022449268_8254041304284481464_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pVwhE_J_6NYAX8Mjf17&_nc_ht=scontent-xsp1-1.xx&oh=daf47bcd098de91af1c9e155c42d191a&oe=61780C76';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function WrappedApp() {
  // Keeps notches away
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

function App() {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Back button */}
      <View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 10,
          left: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="chevron-left" color="white" size={26} />
      </View>

      {/* Refresh arrow */}
      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 13,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [-20, 0],
            outputRange: [1, 0],
          }),
          transform: [
            {
              rotate: scrollY.interpolate({
                inputRange: [-45, -35],
                outputRange: ['180deg', '0deg'],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Icon name="arrow-down" color="white" size={25} />
      </Animated.View>

      {/* Name + tweets count */}
      <Animated.View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: insets.top + 6,
          left: 0,
          right: 0,
          alignItems: 'center',
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [80, -10],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Text style={[styles.text, styles.username]}>Arnaud</Text>

        <Text style={[styles.text, styles.tweetsCount]}>379 tweets</Text>
      </Animated.View>

      {/* Banner */}
      <AnimatedImageBackground
        source={{
          uri: PROFILE_BANNER_URI,
        }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          zIndex: 1,
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: 'extend',
                extrapolateRight: 'clamp',
              }),
            },
          ],
        }}>
        <AnimatedBlurView
          blurType="dark"
          blurAmount={96}
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            opacity: scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [1, 0, 0, 1],
            }),
          }}
        />
      </AnimatedImageBackground>

      {/* Tweets/profile */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: true},
        )}
        style={{
          zIndex: 100,
          marginTop: HEADER_HEIGHT_NARROWED,
          paddingTop: HEADER_HEIGHT_EXPANDED,
        }}>
        <View style={[styles.container, {backgroundColor: 'black'}]}>
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 20,
              },
            ]}>
            <Animated.Image
              source={{
                uri: PROFILE_PICTURE_URI,
              }}
              resizeMode="cover"
              style={{
                width: 75,
                height: 75,
                borderRadius: 40,
                borderWidth: 4,
                borderColor: 'black',
                marginTop: 0,
                transform: [
                  {
                    scale: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [1, 0.6],
                      extrapolate: 'clamp',
                    }),
                  },
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [0, 15],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            />

            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginTop: 10,
                },
              ]}>
              Arnaud
            </Text>

            <Text
              style={[
                styles.text,
                {
                  fontSize: 15,
                  color: 'gray',
                  marginBottom: 15,
                },
              ]}>
              @eveningkid
            </Text>

            <Text style={[styles.text, {marginBottom: 15, fontSize: 15}]}>
              Same @ on every social media
            </Text>

            {/* Profile stats */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
              }}>
              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: 'bold',
                    marginRight: 10,
                  },
                ]}>
                70{' '}
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'normal',
                  }}>
                  Following
                </Text>
              </Text>

              <Text style={[styles.text, {fontWeight: 'bold'}]}>
                106{' '}
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'normal',
                  }}>
                  Followers
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            {TWEETS.map((item, index) => (
              <View key={item.key} style={styles.tweet}>
                <Image
                  source={{
                    uri: PROFILE_PICTURE_URI,
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />

                <View style={styles.container}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontWeight: 'bold',
                        fontSize: 15,
                      },
                    ]}>
                    {item.author}{' '}
                    <Text
                      style={{
                        color: 'gray',
                        fontWeight: 'normal',
                      }}>
                      @{item.tag} · {index + 1}d
                    </Text>
                  </Text>

                  <Text style={[styles.text, {fontSize: 15}]}>{item.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
});
