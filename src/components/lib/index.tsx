import React from 'react';
import {View, ImageBackground, Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

export const Height = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/* ANCHOR AVATAR */
interface GeneralProps {
  style?: any;
  backgroundColor?: any;
  color?: any;
}

interface MarginProps {
  margin?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: any;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}

interface PaddingProps {
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: any;
}

interface BorderRadiusProps {
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}

interface BorderWidth {
  borderBottomWidth?: number;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderWidth?: number;
  borderColor?: any;
  borderStyle?: any;
}
interface Avatar {
  marginLeft?: number;
  marginRight?: number;
  borderWidth?: number;
  borderColor?: any;
  url?: string;
  source?: any;
  elevation?: number;
  size?: number;
  backgroundColor?: any;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fit?: 'cover' | 'contain';
}

export const Avatar = ({
  ...props
}: Avatar & MarginProps & PaddingProps & BorderWidth & BorderRadiusProps) => {
  return (
    <View
      style={[
        // @ts-ignore
        {
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size) || Width(10),
          width: Width(props.size) || Width(10),
          backgroundColor: props.backgroundColor,
          // @ts-ignore
          borderRadius: Width(props.size) / 2 || Width(10) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
        },
      ]}>
      <ImageBackground
        source={props.source || {uri: props.url}}
        resizeMode={props.fit || 'cover'}
        style={[
          // @ts-ignore
          {
            height: Width(props.size) || Width(10),
            width: Width(props.size) || Width(10),
            // @ts-ignore
            borderRadius: Width(props.size) / 2 || Width(10) / 2,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
      />
    </View>
  );
};

/**ANCHOR ROUNDED */
interface RoundedProps {
  backgroundColor?: any;
  size?: number;
  radius?: number;
  height?: number;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  elevation?: number;
  children?: React.ReactNode;
}

export const Rounded = ({
  ...props
}: RoundedProps & MarginProps & BorderRadiusProps & BorderWidth) => {
  return (
    <View
      // @ts-ignore
      style={{
        backgroundColor: props.backgroundColor,
        height: Height(props.size),
        width: Height(props.size),
        // @ts-ignore
        borderRadius: props.radius || Height(props.size) / 2,
        marginRight: props.marginRight,
        marginLeft: props.marginLeft,
        marginTop: props.marginRight,
        marginBottom: props.marginLeft,
        position: props.position,
        top: Height(props.top),
        bottom: Height(props.bottom),
        left: Width(props.left),
        right: Width(props.right),
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};
