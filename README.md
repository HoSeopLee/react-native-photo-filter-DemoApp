# React-Native Photo Filter

## 사용 모듈

- react-native-screens
- react-native-safe-area-context
- react-native-gesture-handler
- react-native-reanimated
- react-native-svg
- react-native-redash
- chroma-js
- fbjs
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @react-navigation/stack
- @react-native-community/cameraroll
  - 내부 사진 불러오기 위한 요소
- react-native-responsive-dimensions
  - 뷰 크기 맞추기
- react-native-circular-progress-indicator@4.4.0
  - 사진 촬영 버튼 애니메이션 바
- react-native-photoeditorsdk@2.13.0
  - andorid 및 ios 최신 버전 호환이 안맞아 2.13.0 버전 권유함(유료 앱 github)
  - https://github.com/imgly/pesdk-react-native 참고링크
  - https://img.ly/blog/a-photo-and-video-editor-for-your-react-native-apps/ 튜토리얼
- react-native-video
  - 비디오
- react-native-videoeditorsdk
  - andorid 및 ios 최신 버전 호환이 안맞아 2.13.0 버전 권유함(유료 앱 github)
  - https://github.com/imgly/vesdk-react-native 참고링크
  - https://img.ly/blog/a-photo-and-video-editor-for-your-react-native-apps/ 튜토리얼
- react-native-vision-camera
  - 카메라 기능
- rn-range-slider
  - 랭지바
- react-native-permissions
  - 권한

## 사진 관련 필수 권한

- ios 같은 경우 info.plist 에

```xml
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>$(PRODUCT_NAME) Requires access to the gallery.</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>$(PRODUCT_NAME) Requires access to the gallery.</string>

```

가 없을 경우 이미지 호출이 안될수 있습니다. 필수로 체크해주셔야됩니다.

- android 같은 경우에는 AndroidManifest.xml에 아래와 같은

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

```

및

```xml
  <application
      ...
      android:requestLegacyExternalStorage="true" >
```

필수로 적용시켜야지 이상없이 동작합니다.

## 카메라 권한 및 마이크 권한

- ios 같은 경우 info.plist 에

```xml
	<key>NSCameraUsageDescription</key>
	<string>$(PRODUCT_NAME) needs access to your Camera.</string>
  <string>$(PRODUCT_NAME) needs access to your Microphone.</string>
	<key>NSPhotoLibraryAddUsageDescription</key>

```

- android 같은 경우에는 AndroidManifest.xml에 아래와 같은

```xml
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
```

## react-native-video android error 시 처리 방법

- android/build.gradle에 jcenter()추가

```gradle
allprojects {
   repositories {
       ...
       jcenter() //비디오
       ...
   }
}
```

## react-native app 권한요청

- ios설정 Podfile

```ruby
target 'YourAwesomeProject' do

  # …
  permissions_path = '../node_modules/react-native-permissions/ios'
  pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
  pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
  pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"

end
```

- android

```xml
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

```
