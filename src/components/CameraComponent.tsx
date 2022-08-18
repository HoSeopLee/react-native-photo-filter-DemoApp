import {Alert, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import {getFont, getWidth} from '~/libs/crossDevice';
import CircularProgress from 'react-native-circular-progress-indicator';
import {MainParamList} from '~/router/router.types';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import {PESDK} from 'react-native-photoeditorsdk';

const SCALE_FULL_ZOOM = 3;

type naviType = StackNavigationProp<MainParamList, 'ImageFilterTest'>;

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

interface Props {
  type?: null | string;
}

const CameraComponent = ({type = null}: Props) => {
  const navigation = useNavigation<naviType>();
  const isFocused = useIsFocused(); // 일시 중지
  const camera = useRef<Camera | null | any>(null);
  const devices = useCameraDevices();

  //카메라 상태
  const device = devices.back;
  //줌 관련
  const zoom = useSharedValue(0);
  const minZoom = device?.minZoom ?? 1;
  const maxZoom = Math.min(device?.maxZoom ?? 1, 10);

  //플래쉬
  const [flash, setFlash] = useState<'off' | 'on'>('off');

  //권한 확인 함수
  const _handleAushCheck = async () => {
    //권한 확인
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    if (
      cameraPermission === 'authorized' &&
      microphonePermission === 'authorized'
    ) {
      return true;
    } else {
      const cameraPermissionAdd = await Camera.requestCameraPermission();
      const microphonePermissionAdd =
        await Camera.requestMicrophonePermission();
      if (
        cameraPermissionAdd === 'authorized' &&
        microphonePermissionAdd === 'authorized'
      ) {
        return true;
      } else {
        Alert.alert('asdfasfd');
      }
    }
  };

  //카메라 줌
  const cameraAnimatedProps = useAnimatedProps(() => {
    const z = Math.max(Math.min(zoom.value, maxZoom), minZoom);
    return {
      zoom: z,
    };
  }, [maxZoom, minZoom, zoom]);

  //#region Pinch to Zoom Gesture
  // The gesture handler maps the linear pinch gesture (0 - 1) to an exponential curve since a camera's zoom
  // function does not appear linear to the user. (aka zoom 0.1 -> 0.2 does not look equal in difference as 0.8 -> 0.9)
  const onPinchGesture = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    {startZoom?: number}
  >({
    onStart: (_, context) => {
      context.startZoom = zoom.value;
    },
    onActive: (event, context) => {
      // we're trying to map the scale gesture to a linear zoom here
      const startZoom = context.startZoom ?? 0;
      const scale = interpolate(
        event.scale,
        [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM],
        [-1, 0, 1],
        Extrapolate.CLAMP,
      );
      zoom.value = interpolate(
        scale,
        [-1, 0, 1],
        [minZoom, startZoom, maxZoom],
        Extrapolate.CLAMP,
      );
    },
  });
  //프래쉬
  const onFlashPressed = useCallback(() => {
    setFlash(f => (f === 'off' ? 'on' : 'off'));
  }, []);

  useEffect(() => {
    _handleAushCheck();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#222'}}>
      {device && (
        <PinchGestureHandler
          onGestureEvent={onPinchGesture}
          enabled={isFocused}>
          <Reanimated.View style={StyleSheet.absoluteFill}>
            <ReanimatedCamera
              style={StyleSheet.absoluteFill}
              ref={camera} // 카메라 참조
              device={device} // 디바이스 설정
              isActive={isFocused} //포커스 상태에 따라 카메라 켜고 끄기
              photo={true} //사진 캡쳐
              fps={128}
              enableZoomGesture={false}
              animatedProps={cameraAnimatedProps}
              frameProcessorFps={1}
              lowLightBoost={true}
            />
          </Reanimated.View>
        </PinchGestureHandler>
      )}
      {/* 카메라 촬영및영상촬영 버튼 */}
      <Pressable
        style={({pressed}) => [
          {
            position: 'absolute',
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: pressed ? 0.5 : 1,
          },
        ]}
        onPress={async () => {
          const photo = await camera?.current?.takePhoto({
            flash: flash,
            fileType: 'png',
          });
          if (photo?.path) {
            console.log(photo.path);
            if (type === 'pay') {
              const urlData = await PESDK.openEditor('file:///' + photo?.path);
              urlData?.image &&
                navigation.navigate('ImageFilterTest', {
                  imageUrl: urlData?.image ? urlData?.image : '',
                  type: type,
                });
            } else {
              navigation.navigate('ImageFilterTest', {
                type: type ? type : '',
                imageUrl: photo.path
                  ? Platform.OS === 'android'
                    ? 'file:///' + photo?.path
                    : photo?.path
                  : '',
              });
            }
          }
          // navigation.navigate('ImageFilterTest', {
          //   imageUrl: 'file:///' + photo?.path,
          // });
        }}>
        <>
          <CircularProgress
            value={0}
            inActiveStrokeColor={'#fff'}
            inActiveStrokeOpacity={1}
            activeStrokeColor={'#fff'}
            showProgressValue={false}
            radius={getWidth(35)}
            // onAnimationComplete={() => {
            //   setVideoState(false);
            //   setVideoCount(0);
            // }}
          />
          <View
            style={{
              position: 'absolute',
              width: getWidth(53),
              height: getWidth(53),
              borderRadius: 1000,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#222',
            }}
          />
        </>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          {
            position: 'absolute',
            top: 20,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: pressed ? 0.5 : 1,
            left: 10,
          },
        ]}
        onPress={async () => {
          onFlashPressed();
        }}>
        <Text style={{fontSize: getFont(20)}}>아이콘자리: {flash}</Text>
      </Pressable>
    </View>
  );
};

export default CameraComponent;
