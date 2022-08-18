import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Invert,
  Brightness,
  ColorTone,
  Tint,
  Normal,
  ColorMatrix,
  RGBA,
  HueRotate,
  LuminanceToAlpha,
  Grayscale,
  Sepia,
  Nightvision,
  Warm,
  Cool,
  Contrast,
  Temperature,
  Threshold,
  Polaroid,
  ToBGR,
  Kodachrome,
  Browni,
  Vintage,
  Night,
  Predator,
  Lsd,
  DuoTone,
  Protanomaly,
  Deuteranomaly,
  Tritanomaly,
  Protanopia,
  Deuteranopia,
  Tritanopia,
  Achromatopsia,
  Achromatomaly,
} from 'react-native-image-filter-kit';

interface Props {
  url?: string;
  imageFilterType?: string;
  extractImageEnabled?: boolean;
  EditFilterSaveImage?: (value: string | null | undefined) => void;
}

const FilterImage = ({
  url = undefined,
  imageFilterType = '',
  EditFilterSaveImage = () => {},
  extractImageEnabled = false,
}: Props) => {
  const image = <Image style={styles.ViewSize} source={{uri: url}} />;

  const _AddImageFilter = async (filterImage: string) => {
    setTimeout(() => {
      EditFilterSaveImage(filterImage);
    }, 500);
  };

  return url ? (
    <View>
      {imageFilterType === 'Normal' ? (
        <Normal
          onFilteringStart={() => {
            console.log('asdfasdfsdf ::: ');
          }}
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          onFilteringFinish={({nativeEvent}) => {
            console.log('asdfasdfsdf 222222::: ', nativeEvent);
          }}
          onFilteringError={({nativeEvent}) => console.log(nativeEvent.message)}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'ColorMatrix' ? (
        <ColorMatrix
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          matrix={[
            1.4, -0.02, -0.02, 0, 0, -0.2, 1.3, -0.2, 0, 0, -0.6, -0.1, 1.83, 0,
            0, 0, 0, 0, 1, 0,
          ]}
        />
      ) : imageFilterType === 'RGBA' ? (
        <RGBA
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          red={0.5}
          green={0.25}
          blue={0.75}
          alpha={0.5}
        />
      ) : imageFilterType === 'HueRotate' ? (
        <HueRotate
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            console.log('asdfasfasdfasdf ');
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={Math.PI / 2}
        />
      ) : imageFilterType === 'LuminanceToAlpha' ? (
        <LuminanceToAlpha
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Invert' ? (
        <Invert
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Grayscale' ? (
        <Grayscale
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={1}
        />
      ) : imageFilterType === 'Sepia' ? (
        <Sepia
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={0.75}
        />
      ) : imageFilterType === 'Nightvision' ? (
        <Nightvision
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'LuminanceToAlpha' ? (
        <LuminanceToAlpha
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Warm' ? (
        <Warm
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Cool' ? (
        <Cool
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Brightness' ? (
        <Brightness
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={2}
        />
      ) : imageFilterType === 'Contrast' ? (
        <Contrast
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={5}
        />
      ) : imageFilterType === 'Temperature' ? (
        <Temperature
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={5}
        />
      ) : imageFilterType === 'Tint' ? (
        <Tint
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          amount={3}
        />
      ) : imageFilterType === 'Threshold' ? (
        <Threshold
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Polaroid' ? (
        <Polaroid
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'ToBGR' ? (
        <ToBGR
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Kodachrome' ? (
        <Kodachrome
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Browni' ? (
        <Browni
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}: any) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Vintage' ? (
        <Vintage
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Night' ? (
        <Night
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Predator' ? (
        <Predator
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Lsd' ? (
        <Lsd
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'ColorTone' ? (
        <ColorTone
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'DuoTone' ? (
        <DuoTone
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
          firstColor={'red'}
          secondColor={'green'}
        />
      ) : imageFilterType === 'Protanomaly' ? (
        <Protanomaly
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Deuteranomaly' ? (
        <Deuteranomaly
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Tritanomaly' ? (
        <Tritanomaly
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Protanopia' ? (
        <Protanopia
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Deuteranopia' ? (
        <Deuteranopia
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Tritanopia' ? (
        <Tritanopia
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : imageFilterType === 'Achromatopsia' ? (
        <Achromatopsia
          style={styles.ViewSize}
          onExtractImage={({nativeEvent}) => {
            _AddImageFilter(nativeEvent.uri);
          }}
          extractImageEnabled={extractImageEnabled}
          image={image}
        />
      ) : (
        imageFilterType === 'Achromatomaly' && (
          <Achromatomaly
            style={styles.ViewSize}
            onExtractImage={({nativeEvent}) => {
              _AddImageFilter(nativeEvent.uri);
            }}
            extractImageEnabled={extractImageEnabled}
            image={image}
          />
        )
      )}
    </View>
  ) : null;
};

export default React.memo(FilterImage);

const styles = StyleSheet.create({
  ViewSize: {
    width: '100%',
    height: '100%',
  },
});
