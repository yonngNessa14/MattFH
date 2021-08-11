import React, {FunctionComponent} from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Bg} from '@images';
import {Home} from '@screens';
import {Footer, Screen} from '@components';

const App = () => {
  const statusBar = () => {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={{backgroundColor: '#303371'}}>
          <SafeAreaView edges={['left', 'right', 'top']} />
        </View>
      </>
    );
  };

  type Props = {
    children?: React.ReactNode | React.ReactNode[];
  };

  const RenderWrapper: FunctionComponent<Props> = ({children}) => {
    return (
      <Screen paddingHorizontal={0}>
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
      </Screen>
    );
  };
  return (
    <>
      <SafeAreaProvider>
        {statusBar()}
        <RenderWrapper>
          <Home />
          <Footer />
        </RenderWrapper>
      </SafeAreaProvider>
    </>
  );
};

export default App;
