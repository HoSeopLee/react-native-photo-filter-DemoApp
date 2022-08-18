import {SafeAreaView} from 'react-native';
import React from 'react';
import {VideoComponents} from '~/components';
import {MainParamList} from '~/router/router.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainPageProps = NativeStackScreenProps<MainParamList, 'CameraTest'>;
interface Props {
  navigation: MainPageProps['navigation'];
  route: MainPageProps['route'];
}

const CameraTest = ({route: {params}}: Props) => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
      <SafeAreaView style={{flex: 1}}>
        <VideoComponents type={params?.type} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 0, backgroundColor: '#fff'}} />
    </>
  );
};

export default CameraTest;
