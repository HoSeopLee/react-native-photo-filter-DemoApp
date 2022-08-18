import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {getFont, getHeight, getWidth} from '~/libs/crossDevice';
import {getFontFamily} from '~/libs/globalFontStyles';
interface Props {
  modal_state: (value: boolean) => void;
  EditChoice?: (value: string) => void;
  data: any;
}

const Option_Modal = ({
  modal_state = () => {},
  EditChoice = () => {},
  data = [],
}: Props) => {
  return (
    <View
      onStartShouldSetResponder={() => {
        modal_state(false);
        return true;
      }}
      style={{
        width: '100%',
        backgroundColor: '#00000099',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: getWidth(81),
      }}>
      <View
        style={{
          width: '100%',
          paddingVertical: getHeight(10),
          maxHeight: getHeight(500),
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: getWidth(20),
          }}>
          {data.map(
            (
              element: {
                title: string;
              },
              index: React.Key | null | undefined,
            ) => {
              return (
                <Pressable
                  key={index}
                  onPress={async () => {
                    EditChoice(element?.title);
                    modal_state(false);
                  }}
                  style={({pressed}) => [
                    {
                      width: '100%',
                      paddingHorizontal: getWidth(18),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderBottomWidth: index === data?.length - 1 ? 0 : 1,
                      borderColor: '#F2F2F2',
                      paddingVertical: getHeight(10),
                      opacity: pressed ? 0.5 : 1,
                      borderRadius: getWidth(20),
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: getFont(16),
                      fontFamily: getFontFamily.Pretendard_Medium,
                      color: '#222',
                    }}>
                    {element?.title}
                  </Text>
                </Pressable>
              );
            },
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Option_Modal;
