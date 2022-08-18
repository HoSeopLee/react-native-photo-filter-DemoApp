import {View, Text, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import {getFont, getWidth} from '~/libs/crossDevice';
import {getFontFamily} from '~/libs/globalFontStyles';
import AutoHeightImage from 'react-native-auto-height-image';
import Option_Modal from '../Option_Modal';

interface Props {
  pick_group: string;
  group_name: any;
  EditPickGroup: (value: string) => void;
}

const ImageGroupHeader = ({
  pick_group = '',
  group_name = [],
  EditPickGroup = () => {},
}: Props) => {
  const [modal_choice, setModal_choice] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: getWidth(16),
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
          setModal_choice(true);
        }}>
        <Text
          style={{
            fontSize: getFont(16),
            fontFamily: getFontFamily.Pretendard_Regular,
            fontWeight: '500',
            color: '#181818',
          }}>
          {pick_group}
        </Text>
        <AutoHeightImage
          width={getWidth(10)}
          style={{marginLeft: getWidth(6.4)}}
          source={require('~/assets/images/arrow.png')}
        />
      </Pressable>
      <Modal
        visible={modal_choice}
        transparent
        animationType="fade"
        statusBarTranslucent //6.22버전에 추가됨
        onRequestClose={() => setModal_choice(false)}>
        <Option_Modal
          modal_state={setModal_choice}
          data={[...group_name]}
          EditChoice={EditPickGroup}
        />
      </Modal>
    </View>
  );
};

export default ImageGroupHeader;
