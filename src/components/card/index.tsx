import React, {FunctionComponent} from 'react';
import {View, Text, Animated, Dimensions, Image} from 'react-native';
import {ButtonSmall, Rounded} from '@components';
import {color} from '@theme';
import {SvgIcon} from '@components/svg-icon';
import styles from './styles';

type Props = {
  item: any;
  ITEM_SIZE?: number;
  SPACING?: any;
  translateY?: any;
};
export const Card: FunctionComponent<Props> = ({
  item,
  ITEM_SIZE,
  SPACING,
  translateY,
}) => {
  return (
    <View
      style={{
        width: ITEM_SIZE,
      }}>
      <Animated.View
        style={[
          styles.cardContainer,
          {
            marginHorizontal: SPACING,
            padding: SPACING * 2,
            transform: [{translateY}],
          },
        ]}>
        <View style={styles.cardWrapper}>
          {item.img && (
            <Image
              source={item.img}
              resizeMode="contain"
              style={styles.stone}
            />
          )}

          {item.add && (
            <Rounded size={5} backgroundColor={color.primary}>
              <SvgIcon name="plus" size={15} />
            </Rounded>
          )}
          <View style={{flex: 1}}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.subTitle}</Text>
          </View>
          {!item.add && (
            <ButtonSmall
              marginBottom={20}
              name="View"
              onPress={() => console.log('hey')}
            />
          )}
        </View>
      </Animated.View>
    </View>
  );
};
