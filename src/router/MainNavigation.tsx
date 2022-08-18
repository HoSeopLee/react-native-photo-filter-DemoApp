import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainParamList, RootNavParamList} from './router.types';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CameraTest, ImageFilterTest, Main_Page, VideoTest} from '~/page';
import VideoFilterTest from '~/page/VideoFilterTest';
import ImageSelectTest from '~/page/ImageSelectTest';
import ImageSelectFilterTests from '~/page/ImageSelectFilterTests';

type MainBottomNavigation = BottomTabScreenProps<
  RootNavParamList,
  'MainNavigation'
>;
interface Props {
  navigation: MainBottomNavigation['navigation'];
  route: MainBottomNavigation['route'];
}

const Stack = createNativeStackNavigator<MainParamList>();

function MainNavigation({navigation, route}: Props) {
  const ShowRoute = [undefined, 'Main_Page'];
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (ShowRoute.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen name="Main_Page" component={Main_Page} />
      <Stack.Screen name="CameraTest" component={CameraTest} />
      <Stack.Screen name="VideoTest" component={VideoTest} />
      <Stack.Screen name="ImageFilterTest" component={ImageFilterTest} />
      <Stack.Screen name="VideoFilterTest" component={VideoFilterTest} />
      <Stack.Screen name="ImageSelectTest" component={ImageSelectTest} />
      <Stack.Screen
        name="ImageSelectFilterTests"
        component={ImageSelectFilterTests}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
