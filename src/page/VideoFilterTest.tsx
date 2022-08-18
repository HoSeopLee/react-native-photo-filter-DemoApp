import {SafeAreaView} from 'react-native';
import React, {useRef} from 'react';
import {MainParamList} from '~/router/router.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Video from 'react-native-video';

type ImageFilterTest = NativeStackScreenProps<MainParamList, 'VideoFilterTest'>;
interface Props {
  navigation: ImageFilterTest['navigation'];
  route: ImageFilterTest['route'];
}

const VideoFilterTest = ({route: {params}}: Props) => {
  const ref = useRef(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      {params?.videoUrl && (
        <Video
          source={{uri: params?.videoUrl}} // Can be a URL or a local file.
          ref={ref} // Store reference
          style={[{flex: 1}]}
          repeat={true}
          controls={false}
          resizeMode={'stretch'}
          disableFocus={true}
        />
      )}
    </SafeAreaView>
  );
};

export default VideoFilterTest;
