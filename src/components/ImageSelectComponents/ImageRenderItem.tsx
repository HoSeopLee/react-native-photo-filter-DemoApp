/* eslint-disable @typescript-eslint/no-shadow */
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {getWidth} from '~/libs/crossDevice';

interface Props {
  choice_images: any;
  item: any;
  EditChoiceImage: (value: any) => void;
}

const ImageRenderItem = ({
  choice_images,
  item,
  EditChoiceImage = () => {},
}: Props) => {
  //비교 함수
  const someArray = (item: string) => {
    return choice_images?.some((data: {uri: string}) => {
      if (data?.uri === item) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (someArray(item.node.image.uri) === true) {
          EditChoiceImage(
            choice_images?.filter((data: {uri: string}) => {
              return data.uri !== item.node.image.uri;
            }) ?? [],
          );
        } else {
          EditChoiceImage([
            ...choice_images,
            {
              uri: item.node.image.uri,
              type: 'image',
              name: item.node.image.filename,
              key: new Date().getTime(),
              cash_uri: '',
            },
          ]);
        }
      }}
      style={[
        styles.ImageChoiseView,
        {
          borderWidth: 2,
          borderColor: someArray(item.node.image.uri) ? 'skyblue' : '#fff',
        },
      ]}>
      <Image
        style={[styles.ImageStyle]}
        source={{
          uri: item.node.image.uri,
          headers: {Authorization: 'someToken'},
          // priority: FastImage.priority.normal,
        }}
      />
      <View
        style={[
          styles.ImageChoiseButtonView,
          someArray(item.node.image.uri) && {
            backgroundColor: 'skyblue',
            borderColor: 'skyblue',
          },
        ]}>
        {choice_images?.length !== 0 &&
          choice_images.find(
            (x: {uri: string}) => x.uri === item.node.image.uri,
          ) && (
            <Text style={[styles.FontChoiseButtonStyle]}>
              {choice_images?.findIndex(
                (obj: {uri: string}) => obj?.uri === item.node.image.uri,
              ) + 1 ?? ''}
            </Text>
          )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageRenderItem;
const styles = StyleSheet.create({
  //FlatList정의
  contentContainer: {
    backgroundColor: 'white',
    paddingTop: -10,
  },
  ImageChoiseView: {
    width: getWidth(400 / 3),
    height: getWidth(400 / 3),
    marginRight: getWidth(5),
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
  },
  ImageChoiseButtonView: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 2,
    right: 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
  },
  FontChoiseButtonStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  //아이콘 스타일 정의
  IconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  //바텀 컨테이너
  BottomViewStyle: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomViewTextStyle: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 5,
  },
});
