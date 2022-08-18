import {TouchableOpacity, Text, SafeAreaView, Modal, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainParamList} from '~/router/router.types';

type MainPageProps = NativeStackScreenProps<MainParamList, 'Main_Page'>;
interface Props {
  navigation: MainPageProps['navigation'];
  route: MainPageProps['route'];
}
const Main_Page = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />

      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CameraTest', {type: 'pay'});
          }}>
          <Text>유료 사진 촬영 필터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('CameraTest', {type: 'free'});
          }}>
          <Text>무료 사진 촬영 필터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('VideoTest', {type: 'pay'});
          }}>
          <Text>유료 동영상 촬영 필터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('VideoTest', {type: 'free'});
          }}>
          <Text>동영상 촬영 후 전달</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('ImageSelectTest', {type: 'free'});
          }}>
          <Text>이미지 선택 후 필터 무료(여러장 선택)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => {
            navigation.navigate('ImageSelectTest', {type: 'pay'});
          }}>
          <Text>이미지 선택 후 필터 유료(여러장 선택)</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
    </>
  );
};

export default Main_Page;
