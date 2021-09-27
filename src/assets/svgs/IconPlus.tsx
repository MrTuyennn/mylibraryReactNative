import {
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconPlus = (props: Props) => {
  const { height, width, color } = props;
  return (
    <Svg
      height={height || 50 * HEIGHT_SCALE_RATIO}
      width={width || 50 * WIDTH_SCALE_RATIO}
      viewBox="0 0 60 59"
      fill="none"
    >
      <Path
        d="M22.4457 1.68736V21.4287H2.7029V37.1674H22.4457V56.9088H38.1719V37.1674H57.9147V21.4287H38.1719V1.68736H22.4457ZM20.7589 0H39.8587V19.7414H59.6016V38.8547H39.8587V58.5961H20.7589V38.8547H0.978241V19.7414H20.7211V0H20.7589Z"
        fill={color || ptColor.appColor}
      />
    </Svg>
  );
};

export default memo(IconPlus);
