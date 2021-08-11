import React, {useState, FunctionComponent} from 'react';
import {View, Text, Animated, Dimensions, Image} from 'react-native';
import styles from './styles';
import {Stone2} from '@images';

const {width} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = width * 0.58;

type Props = {
  scrollX: any;
};

export const Home: FunctionComponent<Props> = ({scrollX}) => {
  const [data, setData] = useState([
    {name: 'nelson'},
    {name: 'neldsfson'},
    {name: 'neldfason'},
    {name: 'nelsfadfgdaon'},
    {name: 'nelsfadffggdaon'},
    {name: 'nelsfadfgggdaon'},
  ]);
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
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
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
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
                <View
                  style={{
                    width: '90%',
                    height: 300,
                    alignItems: 'center',
                  }}>
                  {/* <Image source={Stone2} /> */}
                  <Text style={styles.cardTitle}>
                    Moonstone {`\n`} Keychain
                  </Text>
                  <Text style={styles.cardSubtitle}>
                    Choosing the Best Gemstonefor Your Necklace and Jewelry
                  </Text>
                </View>
              </Animated.View>
            </View>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
