import {View, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import ImageRenderItem from './ImageSelectComponents/ImageRenderItem';
import ImageGroupHeader from './ImageSelectComponents/ImageGroupHeader';

const PHOTO_COUNT = 200;
interface Props {
  pick_group: string;
  choice_images: any;
  EditPickGroup: (value: string) => void;
  EditChoiceImage: (value: string) => void;
  EditLoading: (value: boolean) => void;
}

const ImageSelectList = ({
  pick_group = '',
  choice_images,
  EditPickGroup = () => {},
  EditChoiceImage = () => {},
  EditLoading = () => {},
}: Props) => {
  const [image, setImage] = useState<any>([]);
  const [group_name, setGroup_name] = useState<any>([
    {title: '최근 항목', count: PHOTO_COUNT},
  ]); //이미지 그룹 리스트
  const [pick_count, setPick_count] = useState(0); // 이미지 선택 갯수

  const _handleAlbumArray = async () => {
    setGroup_name([{title: '최근 항목', count: PHOTO_COUNT}]);
    CameraRoll.getAlbums({
      assetType: 'Photos',
    })
      .then(async r => {
        setGroup_name((data: any) => [...data, ...r]);
        await setPick_count(PHOTO_COUNT);
        await setTimeout(() => {
          EditPickGroup('최근 항목');
        }, 500);
      })
      .catch(err => {
        console.log(err);
        //Error Loading Images
      });
  };
  const _handleAlbumList = async () => {
    EditLoading(true);
    CameraRoll.getPhotos({
      first: pick_group === '최근 항목' ? PHOTO_COUNT : pick_count,
      assetType: 'Photos',
      groupTypes: pick_group === '최근 항목' ? undefined : 'Album',
      groupName: pick_group === '최근 항목' ? '' : pick_group,
    })
      .then(r => {
        setImage(r?.edges ? r?.edges : []);
        setTimeout(() => {
          EditLoading(false);
        }, 1500);
      })
      .catch(err => {
        console.log(err);
        EditLoading(false);

        //Error Loading Images
      });
  };

  //앨범 호출
  useEffect(() => {
    _handleAlbumArray();
  }, []);

  //사진 리스트 호출
  useEffect(() => {
    _handleAlbumList();
  }, [pick_group]);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 32}}>
        <ImageGroupHeader
          pick_group={pick_group}
          group_name={group_name}
          EditPickGroup={EditPickGroup}
        />
      </View>
      <FlatList
        numColumns={3}
        // scrollEnabled={loading ? !loading : true}
        data={image}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.3}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ImageRenderItem
              item={item}
              choice_images={choice_images}
              EditChoiceImage={EditChoiceImage}
            />
          );
        }}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default ImageSelectList;
const styles = StyleSheet.create({
  //FlatList정의
  contentContainer: {
    backgroundColor: 'white',
  },
});
