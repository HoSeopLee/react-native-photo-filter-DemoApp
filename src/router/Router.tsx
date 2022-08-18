import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootNavParamList} from './router.types';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ColorWhite} from '~/Utils/Palette';
import MainNavigation from './MainNavigation';
import {getWidth} from '~/libs/crossDevice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<RootNavParamList>();

function Router() {
  const insets = useSafeAreaInsets();

  const [modal_open, setModal_open] = useState(false);
  const height = Platform.OS === 'ios' ? 44 + insets.bottom : 15;
  return (
    <>
      <Tab.Navigator
        initialRouteName="MainNavigation"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: ColorWhite,
            shadowColor: 'rgb(50, 50, 50)',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            shadowOffset: {
              height: 6,
              width: 0,
            },
            elevation: 6,
          },
        }}>
        <Tab.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={() => ({
            tabBarLabel: () => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_on.png')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_off.png')}
                  resizeMode="contain"
                />
              ),
          })}
        />
        <Tab.Screen
          name="LiveNavigation"
          component={View}
          options={({}) => ({
            tabBarLabel: () => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_on.png')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_off.png')}
                  resizeMode="contain"
                />
              ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  Alert.alert('준비중입니다.');
                }}
              />
            ),
          })}
        />
        <Tab.Screen
          name="OptionModal"
          component={View}
          options={({}) => ({
            tabBarLabel: () => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_on.png')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_off.png')}
                  resizeMode="contain"
                />
              ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  setModal_open(true);
                }}
              />
            ),
          })}
        />
        <Tab.Screen
          name="TalkNavigation"
          component={View}
          options={({}) => ({
            tabBarLabel: () => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_on.png')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_off.png')}
                  resizeMode="contain"
                />
              ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  Alert.alert('준비중입니다.');
                }}
              />
            ),
          })}
        />
        <Tab.Screen
          name="MyPageNavigation"
          component={View}
          options={({}) => ({
            tabBarLabel: () => <></>,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_on.png')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={styles.icon}
                  source={require('~/assets/images/icon_home_off.png')}
                  resizeMode="contain"
                />
              ),
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  Alert.alert('준비중입니다.');
                }}
              />
            ),
          })}
        />
      </Tab.Navigator>
      <Modal
        visible={modal_open}
        transparent={true}
        animationType={'fade'}
        style={{justifyContent: 'flex-end'}}
        statusBarTranslucent //6.22버전에 추가됨
      >
        <>
          <View
            onStartShouldSetResponder={() => {
              setModal_open(false);
              return true;
            }}
            style={{
              backgroundColor: '#ffffff00',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: Dimensions.get('window').height - height,
            }}>
            <View
              style={{width: '100%', flex: 1, backgroundColor: '#00000099'}}
            />
            <View
              style={{
                height: 'auto',
                width: '100%',
                backgroundColor: '#fff',
                borderTopRightRadius: getWidth(5),
                borderTopLeftRadius: getWidth(5),
                borderColor: '#fff',
                borderWidth: 1,
              }}>
              <Text>이부분 정보 수정 및 등록 부분</Text>
            </View>
          </View>
          <View
            onStartShouldSetResponder={() => {
              setModal_open(false);
              return true;
            }}
            style={{
              height: height,
              backgroundColor: '#00000000',
            }}
          />
        </>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    // fontFamily: FontPretendardRegular,
    fontSize: 13,
  },
  icon: {
    width: 22,
    height: 23,
  },
});

export default Router;
