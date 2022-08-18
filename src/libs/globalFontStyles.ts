// 글로벌 스타일 - 정현 21.11.18

import {Platform} from 'react-native';

export const getFontFamily = {
  Pretendard_Bold:
    Platform.OS === 'ios' ? 'Pretendard-Bold' : 'Pretendard-Bold',
  Pretendard_ExtraBold:
    Platform.OS === 'ios' ? 'Pretendard-ExtraBold' : 'Pretendard-ExtraBold',
  Pretendard_Light:
    Platform.OS === 'ios' ? 'Pretendard-Light' : 'Pretendard-Light',
  Pretendard_Medium:
    Platform.OS === 'ios' ? 'Pretendard-Medium' : 'Pretendard-Medium',
  Pretendard_SemiBold:
    Platform.OS === 'ios' ? 'Pretendard-SemiBold' : 'Pretendard-SemiBold',
  Pretendard_Regular:
    Platform.OS === 'ios' ? 'Pretendard-Regular' : 'Pretendard-Regular',
};
