/*  MemeStyle 시작부.
 *  StartNavigation을 시작으로, BottomNavigation으로 이동하며
 *  StartNavigation은 회원가입 및 로그인 부분을 관리하며 BottomNavigation은 하위에 StackNavigation을 포함하며,
 *  앱의 주요 기능을 보여줍니다.
 *  주요 데이터 리스팅은 React Query를 통해 관리 됩니다.
 */

import React, {useEffect} from 'react';
import {LogBox, Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import StartNavigation from '~/router/StartNavigation';

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs(); //Ignore all log notifications

    // iOS에서 Navigation Bottom Tab을 사용하며 Bottom Tab을 숨길시 영역을 차지하고 있는 이슈를 해결합니다.
    // https://github.com/react-navigation/react-navigation/issues/10432
    if (Platform.OS === 'ios') {
      enableScreens(false);
    }

    // 스플래쉬 화면을 숨깁니다.
    setTimeout(() => {
      // SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StartNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
