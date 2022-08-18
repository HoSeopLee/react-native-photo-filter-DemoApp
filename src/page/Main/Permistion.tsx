import {Alert, PermissionsAndroid} from 'react-native';
import {
  PERMISSIONS,
  requestMultiple,
  checkMultiple,
} from 'react-native-permissions';
import RNExitApp from 'react-native-exit-app';

export const AndroidPermissions = () => {
  return PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.CAMERA,
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  ])
    .then(result => {
      if (
        result['android.permission.CAMERA'] === 'granted' &&
        result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted' &&
        result['android.permission.RECORD_AUDIO'] === 'granted'
      ) {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => err);
};

export const AndroidPermissionsCheck = () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
  ])
    .then(async (statuses: any) => {
      if (
        statuses[PERMISSIONS.ANDROID.CAMERA] === 'active' &&
        statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === 'active' &&
        statuses[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'active'
      ) {
        console.log('asdfasdf ?? ', statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log(
          'asdfasdf ?? ',
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
        );
        console.log('asdfasdf ?? ', statuses[PERMISSIONS.ANDROID.RECORD_AUDIO]);
        return true;
      } else {
        const check = await AndroidPermissions();
        console.log('check :: ', check);
        if (check) {
          return true;
        } else {
          Alert.alert(
            '알림',
            '최초 권한 설정을 거부하셨습니다.\n앱 설정에서 권한 허용 해주세요.',
            [
              {
                text: '확인',
                style: 'default',
                onPress: () => RNExitApp.exitApp(),
              },
            ],
          );
          return;
        }
      }
    })
    .catch(async () => {
      const check = await AndroidPermissions();
      if (check) {
        return true;
      } else {
        Alert.alert(
          '알림',
          '최초 권한 설정을 거부하셨습니다.\n앱 설정에서 권한 허용 해주세요.',
          [
            {
              text: '확인',
              style: 'default',
              onPress: () => RNExitApp.exitApp(),
            },
          ],
        );
        return;
      }
    });
};

export const IOSPermissions = () => {
  return requestMultiple([
    PERMISSIONS.IOS.MICROPHONE,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ])
    .then(async statuses => {
      if (
        statuses[PERMISSIONS.IOS.MICROPHONE] === 'granted' &&
        statuses[PERMISSIONS.IOS.CAMERA] === 'granted' &&
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'granted'
      ) {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => err);
};

export const IOSPermissionsCheck = () => {
  checkMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
  ])
    .then(async (statuses: any) => {
      if (
        statuses[PERMISSIONS.IOS.MICROPHONE] === 'granted' &&
        statuses[PERMISSIONS.IOS.CAMERA] === 'granted' &&
        statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === 'granted'
      ) {
        return true;
      } else {
        const check = await IOSPermissions();
        if (check) {
          return true;
        } else {
          Alert.alert(
            '알림',
            '최초 권한 설정을 거부하셨습니다.\n앱 설정에서 권한 허용 해주세요.',
            [
              {
                text: '확인',
                style: 'default',
                onPress: () => RNExitApp.exitApp(),
              },
            ],
          );
          return;
        }
      }
    })
    .catch(async () => {
      const check = await IOSPermissions();
      if (check) {
        return true;
      } else {
        Alert.alert(
          '알림',
          '최초 권한 설정을 거부하셨습니다.\n앱 설정에서 권한 허용 해주세요.',
          [
            {
              text: '확인',
              style: 'default',
              onPress: () => RNExitApp.exitApp(),
            },
          ],
        );
        return;
      }
    });
};
