import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// iPhone 14 Pro Max
const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

export const scale = (size: number, maxSize?: number): number =>
  Math.min((screenWidth / guidelineBaseWidth) * size, maxSize || size);
export const horizontalScale = (size: number): number => (screenWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number): number => (screenHeight / guidelineBaseHeight) * size;
