import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const widthPercentageToDP = (widthPercent: string): number => {
    const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};


export const heightPercentageToDP = (heightPercent: string): number => {
    const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


export const listenOrientationChange = (that: { setState: (arg0: { orientation: string; }) => void; }) => {
    Dimensions.addEventListener('change', newDimensions => {
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;

        that.setState({
            orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
        });
    });
};

export const removeOrientationListener = () => {
    const OrientationListener = Dimensions.addEventListener('change', () => { });
    return OrientationListener.remove()
};

const sz8 = heightPercentageToDP("1%")
const sz10 = heightPercentageToDP("1.2%")
const sz12 = heightPercentageToDP("1.5%")
const sz14 = heightPercentageToDP("1.7%")
const sz16 = heightPercentageToDP("2%")
const sz18 = heightPercentageToDP("2.2%")
const sz20 = heightPercentageToDP("2.5%")
const sz22 = heightPercentageToDP("2.7%")
const sz24 = heightPercentageToDP("3%")
const sz26 = heightPercentageToDP("3.2%")
const sz28 = heightPercentageToDP("3.4%")
const sz30 = heightPercentageToDP("3.7%")
const sz32 = heightPercentageToDP("3.9%")
const sz34 = heightPercentageToDP("4.2%")
const sz36 = heightPercentageToDP("4.4%")
const sz38 = heightPercentageToDP("4.7%")
const sz40 = heightPercentageToDP("4.9%")
const sz56 = heightPercentageToDP("6.8%")

export {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
};

export {
    sz8,
    sz10,
    sz12,
    sz14,
    sz16,
    sz18,
    sz20,
    sz22,
    sz24,
    sz26,
    sz28,
    sz30,
    sz32,
    sz34,
    sz36,
    sz38,
    sz40,
    sz56
}
