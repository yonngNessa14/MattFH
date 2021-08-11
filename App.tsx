import React, {useState, FunctionComponent, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
  Animated,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Bg} from '@images';
import {Home} from '@screens';

const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const statusBar = () => {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={{backgroundColor: '#303371'}}>
          <SafeAreaView edges={['left', 'right', 'top']}></SafeAreaView>
        </View>
      </>
    );
  };

  type Props = {
    children?: React.ReactNode | React.ReactNode[];
  };

  const RenderWrapper: FunctionComponent<Props> = ({children}) => {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={Bg}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          resizeMode="cover">
          {children}
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      <SafeAreaProvider>
        {statusBar()}
        <RenderWrapper>
          <Home scrollX={scrollX} />
        </RenderWrapper>
      </SafeAreaProvider>
    </>
  );
};

export default App;
