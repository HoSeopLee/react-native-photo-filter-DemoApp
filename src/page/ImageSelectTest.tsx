import {View, Text, SafeAreaView, Image, Pressable, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import Style from '~/components/Style';
import {ImageSelectList, Loading} from '~/components';
import {getFont, getWidth} from '~/libs/crossDevice';
import {getFontFamily} from '~/libs/globalFontStyles';
import {MainParamList} from '~/router/router.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainPageProps = NativeStackScreenProps<MainParamList, 'ImageSelectTest'>;
interface Props {
  navigation: MainPageProps['navigation'];
  route: MainPageProps['route'];
}
const ImageSelectTest = ({navigation, route: {params}}: Props) => {
  const [loading, setLoading] = useState(true);
  const [pick_group, setPick_group] = useState(''); // 이미지 선택 그룹
  const [choice_images, setChoice_images] = useState<any>([]); // 선택된 이미지

  //그룹 변경
  const _EditLoading = useCallback(value => {
    setLoading(value);
  }, []);

  //그룹 변경
  const _EditPickGroup = useCallback(value => {
    setPick_group(value);
  }, []);

  //선택된 이미지 변경
  const _EditChoiceImage = useCallback(
    value => {
      setChoice_images(value);
    },
    [choice_images],
  );

  return (
    <>
      <SafeAreaView style={[Style.notchStyle]} />
      <SafeAreaView style={[Style.container]}>
        <View
          style={{
            width: '100%',
            height: 50,
            paddingHorizontal: getWidth(16),
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Pressable
            style={({pressed}) => [
              {
                flexDirection: 'row',
                alignItems: 'center',
                opacity: pressed ? 0.5 : 1,
              },
            ]}
            onPress={async () => {
              choice_images.length > 0
                ? navigation.navigate('ImageSelectFilterTests', {
                    imageArray: choice_images,
                    type: params?.type,
                  })
                : Alert.alert('알림', '이미지선택필요');
            }}>
            <Text
              style={{
                fontSize: getFont(16),
                fontFamily: getFontFamily.Pretendard_Regular,
                fontWeight: '500',
                color: '#181818',
              }}>
              선택
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {choice_images.length > 0 && (
            <Image
              source={{uri: choice_images[choice_images.length - 1]?.uri}}
              style={{width: '100%', height: '100%'}}
            />
          )}
        </View>
        <View style={{flex: 1}}>
          <ImageSelectList
            pick_group={pick_group}
            EditPickGroup={_EditPickGroup}
            choice_images={choice_images}
            EditChoiceImage={_EditChoiceImage}
            EditLoading={_EditLoading}
          />
        </View>
        {loading && <Loading />}
      </SafeAreaView>
      <SafeAreaView style={[Style.notchStyle]} />
    </>
  );
};

export default ImageSelectTest;
