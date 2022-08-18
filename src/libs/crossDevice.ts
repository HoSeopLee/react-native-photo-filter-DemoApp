// 비율을 통해 가져오는 길이 - 정현 21.11.17
import {Dimensions} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const FIGMA_WINDOW_WIDTH = 412;
const FIGMA_WINDOW_HEIGHT = 778;
const portrait =
  Dimensions.get('window').width < Dimensions.get('window').height;

export function getWidth(width: number) {
  const percentage = portrait
    ? (width / FIGMA_WINDOW_WIDTH) * 100
    : (width / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveScreenWidth(percentage);
}

export function getHeight(height: number) {
  const percentage = portrait
    ? (height / FIGMA_WINDOW_HEIGHT) * 100
    : (height / FIGMA_WINDOW_WIDTH) * 100;
  return responsiveScreenHeight(percentage);
}

export function getFont(size: number) {
  const percentage = portrait
    ? (size / FIGMA_WINDOW_WIDTH) * 100
    : (size / FIGMA_WINDOW_HEIGHT) * 100;
  return responsiveScreenWidth(percentage);
  // const percentage = size * 0.135;
  // return responsiveScreenFontSize(percentage);
}

// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

// const DESIGN_WINDOW = {
//   // xd 디자인 화면 크기
//   width: 360,
//   height: 640,
// };

// export const getCrossDeviceWidth = w => {
//   //360 : 15 = WIDTH : getCrossDeviceWidth(15)
//   return (w * WIDTH) / DESIGN_WINDOW.width;
// };
// //font Size
// export const getCrossDevicefont = w => {
//   //360 : 15 = WIDTH : getCrossDeviceWidth(15)
//   return (w * WIDTH) / DESIGN_WINDOW.width;
// };
// export const getCrossDeviceHeight = h => {
//   //640 : 15 = HEIGHT : getCrossDeviceHEIGHT(15)
//   return (h * HEIGHT) / DESIGN_WINDOW.height;
// };
