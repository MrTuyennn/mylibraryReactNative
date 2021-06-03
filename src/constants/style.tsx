import {Dimensions, PixelRatio, Platform} from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
// Use iPhone6 as base size which is 375 x 667
const baseWidth = 398;
const baseHeight = 736;

///screen scale
export const WIDTH_SCALE_RATIO = WIDTH / baseWidth;
export const HEIGHT_SCALE_RATIO = HEIGHT / baseHeight;
export const PAGING_LIMIT = 5;

export const headerHeight = 56 * HEIGHT_SCALE_RATIO;
export const iconSize = 24 * WIDTH_SCALE_RATIO;
export const heightBottomBar = 69 * HEIGHT_SCALE_RATIO;
export const textInputHeight = 36 * HEIGHT_SCALE_RATIO;
export const fontSize =
  PixelRatio.get() <= 1.5
    ? 14
    : PixelRatio.get() > 1.5 && PixelRatio.get() < 3
    ? 15
    : 16;
//font scale
const scale = Math.min(WIDTH_SCALE_RATIO, HEIGHT_SCALE_RATIO);
export const FS = (size = fontSize) => Math.ceil(size * scale);

export const fixIcon = (isText = false) => {
  return isText
    ? {marginBottom: IS_IOS ? -3 * WIDTH_SCALE_RATIO : -3 * WIDTH_SCALE_RATIO}
    : {
        marginBottom: IS_IOS ? -3 * WIDTH_SCALE_RATIO : -1 * WIDTH_SCALE_RATIO,
      };
};

export const ptColor = {
  greenSuccess: '#3BB54A',
  blue: '#0A8FD8',
  blue2: '#D7E9F9',
  blue3: '#3b5998',
  bgRed: '#F44336',
  bgGreen: '#E0F8E2',
  textRed: '#F44336',
  textGray: '#4D4D4D',
  yellow: '#F2C94C',
  origin2: '#fc6f03',
  origin: '#FF5100',
  stroke: '#D6DFE3',
  gray6: '#F2F2F2',
  appColor: '#0A8FD8',
  appColor2: '#B8E5FA',
  textColor: '#032E42',
  textPlaceholderColor: '#aaaaaa',
  textSubColor: '#828282',
  borderColor: '#B9C0C260',
  borderColor2: '#aaaaaa',
  black: '#222222',
  white: '#ffffff',
  noWhite: '#f5f5f5',
  transparent: 'transparent',
  lineGradientBlue: ['#0090DF', '#0090DF'],
};
export const ptFont = {
  REGULAR: 'Nunito-Regular',
  MEDIUM: 'Nunito-SemiBold',
  BOLD: 'Nunito-Bold',
  BLACK: 'Nunito-Black',
};

export const ptText = {
  H0: {
    fontSize: FS(fontSize) + 12,
    fontFamily: ptFont.MEDIUM,
  },
  H1: {
    fontSize: FS(fontSize) + 8,
    fontFamily: ptFont.MEDIUM,
  },
  H2: {
    fontSize: FS(fontSize) + 6,
    fontFamily: ptFont.MEDIUM,
  },
  H3: {
    fontSize: FS(fontSize) + 4,
    fontFamily: ptFont.MEDIUM,
  },
  H4: {
    fontSize: FS(fontSize) + 2,
    fontFamily: ptFont.MEDIUM,
  },
  BODY1: {
    fontSize: FS(fontSize) + 0,
    fontFamily: ptFont.REGULAR,
  },
  BODY2: {
    fontSize: FS(fontSize) - 2,
    fontFamily: ptFont.REGULAR,
  },
  SMALL1: {
    fontSize: FS(fontSize) - 3,
    fontFamily: ptFont.REGULAR,
  },
  SMALL2: {
    fontSize: FS(fontSize) - 5,
    fontFamily: ptFont.MEDIUM,
  },
  BUTTON: {
    fontSize: FS(fontSize) - 2,
    fontFamily: ptFont.MEDIUM,
  },
};

export const ptButton = {
  FILL: {
    // ...ptShadow.BLUR0,
    height: 40 * HEIGHT_SCALE_RATIO,
    borderRadius: 4 * HEIGHT_SCALE_RATIO,
    backgroundColor: ptColor.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  FILL_DISABLED: {
    // ...ptShadow.BLUR0,
    height: 48 * HEIGHT_SCALE_RATIO,
    borderRadius: 4 * HEIGHT_SCALE_RATIO,
    backgroundColor: ptColor.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OUTLINE: {
    // ...ptShadow.BLUR0,
    borderWidth: 1 * HEIGHT_SCALE_RATIO,
    borderColor: ptColor.appColor2,
    height: 46 * HEIGHT_SCALE_RATIO,
    borderRadius: 4 * HEIGHT_SCALE_RATIO,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OUTLINE_DISABLED: {
    // ...ptShadow.BLUR0,
    borderWidth: 1,
    borderColor: ptColor.borderColor,
    height: 48 * HEIGHT_SCALE_RATIO,
    borderRadius: 4 * HEIGHT_SCALE_RATIO,
    backgroundColor: ptColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OUTLINE_WHITE: {
    // ...ptShadow.BLUR0,
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 48 * HEIGHT_SCALE_RATIO,
    borderRadius: 4 * HEIGHT_SCALE_RATIO,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CIRCLE: {
    width: 48 * HEIGHT_SCALE_RATIO,
    height: 48 * HEIGHT_SCALE_RATIO,
    borderRadius: 24 * WIDTH_SCALE_RATIO,
    backgroundColor: ptColor.appColor2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const style = {
  textCaption: {
    ...ptText.SMALL1,
    fontFamily: ptFont.MEDIUM,
    color: ptColor.black,
  },
  textHeader: {
    ...ptText.H0,
    fontFamily: ptFont.BOLD,
    color: ptColor.textColor,
  },
  textButtonWhite: {
    ...ptText.H4,
    color: ptColor.appColor,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: ptFont.BOLD,
  },
  buttonWhite: {
    ...ptButton.FILL,
    backgroundColor: 'white',
    paddingHorizontal: 8 * WIDTH_SCALE_RATIO,
    paddingVertical: 4 * HEIGHT_SCALE_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textButton: {
    ...ptText.SMALL1,
    color: ptColor.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: ptFont.BOLD,
  },
  button: {
    ...ptButton.FILL,
    paddingHorizontal: 8 * WIDTH_SCALE_RATIO,
    paddingVertical: 4 * HEIGHT_SCALE_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textButtonOutLine: {
    ...ptText.SMALL1,
    color: ptColor.textColor,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: ptFont.MEDIUM,
  },
  buttonOutline: {
    ...ptButton.OUTLINE,
    // paddingHorizontal: 8 * WIDTH_SCALE_RATIO,
    // paddingVertical: 4 * HEIGHT_SCALE_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
};
