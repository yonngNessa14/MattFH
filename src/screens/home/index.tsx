import React, {FunctionComponent, useRef} from 'react';
import {View, Text, Animated, Dimensions} from 'react-native';
import {Avatar, Card} from '@components';
import {ProfileImage} from '@images';
import {dummyData} from '../../dummyData';
import styles from './styles';

const {width} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = width * 0.58;
const SPACE_ITEM = (width - ITEM_SIZE) / 2;

export const Home: FunctionComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar size={15} source={ProfileImage} />
        <Text style={styles.profileText}>Lottie Curtis</Text>
        <View style={styles.productInfo}>
          <Text>You have 3 products</Text>
        </View>
      </View>

      <Animated.FlatList
        data={dummyData}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
        }}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          if (item.left_spacer) {
            return <View style={{width: SPACE_ITEM}}></View>;
          }

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <Card
              item={item}
              SPACING={SPACING}
              translateY={translateY}
              ITEM_SIZE={ITEM_SIZE}
            />
          );
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};
