import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, View, Image, TouchableOpacity, Modal} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PESDK} from 'react-native-photoeditorsdk';
import Style from '~/components/Style';
import {getWidth} from '~/libs/crossDevice';
import {MainParamList} from '~/router/router.types';
import ImageSelectFilterModal from './ImageSelectFilterModal/ImageSelectFilterModal';

type MainPageProps = NativeStackScreenProps<
  MainParamList,
  'ImageSelectFilterTests'
>;
interface Props {
  navigation: MainPageProps['navigation'];
  route: MainPageProps['route'];
}

const ImageSelectFilterTests = ({route: {params}}: Props) => {
  const [choice_Image, setChoice_Image] = useState(
    params?.imageArray ? params?.imageArray[0] : null,
  );
  const [arrayImage, setArrayImage] = useState(params?.imageArray);
  const [modal_image, setModal_image] = useState(false);

  //이미지 교체 핸들러
  const _handleImageChange = async (
    imageUrl: string = '',
    key: number | string = '1',
  ) => {
    if (params?.type === 'pay') {
      const urlData = await PESDK.openEditor(imageUrl);
      if (urlData?.image) {
        setArrayImage((data: any[]) => {
          return data.map((imageData: any) => {
            return imageData?.key === key
              ? {...imageData, cash_uri: urlData.image}
              : imageData;
          });
        });
        setChoice_Image((data: any) => {
          return {
            ...data,
            cash_uri: urlData.image,
            key: key,
          };
        });
      }
    } else {
      setChoice_Image((data: any) => {
        return {
          ...data,
          uri: imageUrl,
          key: key,
        };
      });
      setModal_image(true);
    }
  };
  const EditChoice = useCallback((ChangeData, key) => {
    console.log(ChangeData);
    console.log(key);
    setArrayImage((data: any) => {
      return data.map((imageData: any) => {
        return imageData?.key === key
          ? {...imageData, cash_uri: ChangeData}
          : imageData;
      });
    });
    setChoice_Image((data: any) => {
      return {
        ...data,
        cash_uri: ChangeData,
        key: key,
      };
    });
  }, []);

  return (
    <>
      <SafeAreaView style={[Style.notchStyle]} />
      <SafeAreaView style={[Style.container]}>
        <View style={{flex: 1}}>
          {choice_Image && (
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri:
                  choice_Image?.cash_uri !== ''
                    ? choice_Image?.cash_uri
                    : choice_Image?.uri,
              }}
            />
          )}
        </View>
        <View
          style={{width: '100%', marginTop: 10, marginBottom: 20, height: 50}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{paddingHorizontal: getWidth(10), flexDirection: 'row'}}>
              {arrayImage?.map(
                (
                  element: {uri: any; cash_uri: string; key: number},
                  index: number,
                ) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        _handleImageChange(element.uri, element?.key);
                      }}
                      style={{
                        width: getWidth(50),
                        height: getWidth(50),
                        marginRight: getWidth(5),
                      }}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={{
                          uri:
                            element?.cash_uri !== ''
                              ? element?.cash_uri
                              : element?.uri,
                        }}
                      />
                    </TouchableOpacity>
                  );
                },
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <Modal
        visible={modal_image}
        transparent={true}
        animationType={'fade'}
        style={{justifyContent: 'flex-end'}}>
        <ImageSelectFilterModal
          modal_state={setModal_image}
          image_Data={choice_Image?.uri}
          keyValue={choice_Image?.key}
          EditChoice={EditChoice}
        />
      </Modal>
      <SafeAreaView style={[Style.notchStyle]} />
    </>
  );
};

export default ImageSelectFilterTests;
