import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Loading({transparent = false}) {
  const insets = useSafeAreaInsets();
  return transparent ? (
    <Modal
      visible={true}
      transparent={true}
      animationType={'fade'}
      statusBarTranslucent //6.22버전에 추가됨
    >
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: transparent ? '#0002' : '#fff',
          zIndex: 1,
          flex: 1,
        }}>
        <ActivityIndicator color={'#26374D'} size={'large'} />
      </View>
    </Modal>
  ) : (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
        zIndex: 1,
        flex: 1,
        marginTop: insets.top,
      }}>
      <ActivityIndicator color={'#26374D'} size={'large'} />
    </View>
  );
}
