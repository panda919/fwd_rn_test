import styled from 'styled-components/native';
import { Colors, Metrics, Fonts } from '@theme';
import { View, Text, TextInput } from 'react-native';
import { Input, Button, CheckBox, ListItem } from 'react-native-elements';
import { adjustFontSize, wp, hp } from '@common/responsive';

const itemHeight = 40;
const buttonHeight = 60;
const smallButtonHeight = 36;

const hPaddingStyle = { paddingHorizontal: Metrics.medium };
const vPaddingStyle = { paddingVertical: Metrics.small };
const hMarginStyle = { marginHorizontal: Metrics.medium };
const vMarginStyle = { marginVertical: Metrics.small };
const fullWidthStyle = { width: '100%' };

export const RootBox = styled.View.attrs((props) => ({
    ...(props.hPadding && hPaddingStyle),
    ...(props.vPadding && vPaddingStyle),
    ...(props.hMargin && hMarginStyle),
    ...(props.vMargin && vMarginStyle),
    ...(props.full && fullWidthStyle),
    ...(props.aspectRatio && { aspectRatio: props.aspectRatio }),
    ...props.style,
}))`
    opacity: ${(props) => props.opacity || 1};
`;

export const ColumnBox = styled(RootBox).attrs((props) => ({
    ...props.style,
}))`
    flex-direction: column;
`;
export const CenterBox = styled(RootBox).attrs((props) => ({
    ...props,
}))`
    justify-content: center;
    align-items: center;
`;
export const ColumnCenter = styled(RootBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: center;
    align-items: center;
`;
export const ColumnHCenter = styled(RootBox).attrs((props) => ({
    ...props.style,
}))`
    align-items: center;
`;
export const ColumnVCenter = styled(RootBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: center;
`;
export const RowBox = styled(RootBox).attrs((props) => ({
    ...props.style,
}))`
    flex-direction: row;
`;
export const RowSpaceBetween = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: space-between;
    align-items: center;
`;
export const RowSpaceAround = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: space-around;
    align-items: center;
`;
export const RowSpaceEvenly = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: space-evenly;
    align-items: center;
`;
export const RowCenter = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: center;
    align-items: center;
`;
export const RowLeft = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-start;
    align-items: center;
`;
export const RowRight = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-end;
    align-items: center;
`;

export const RowTop = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: center;
    align-items: flex-start;
`;
export const RowBottom = styled(RowBox).attrs((props) => ({
    ...props.style,
}))`
    justify-content: center;
    align-items: flex-end;
`;

export const RowTopLeft = styled(RowTop).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-start;
`;
export const RowTopRight = styled(RowTop).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-end;
`;

export const RowBottomLeft = styled(RowBottom).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-start;
`;
export const RowBottomRight = styled(RowBottom).attrs((props) => ({
    ...props.style,
}))`
    justify-content: flex-end;
`;

export const SpaceBox = styled(RootBox)`
    aspect-ratio: ${(props) => props.aspectRatio};
    width: 100%;
`;

export const InfoContainer = styled.View.attrs({
    height: hp(itemHeight),
    width: '100%',
})`
    padding-left: 30px;
    padding-right: 30px;
`;

export const HiddenText = styled.Text.attrs()`
    height: 0px;
    opacity: 0;
`;

export const PanelContainer = styled.View.attrs((props) => ({
    ...props?.style,
}))`
    width: 100%;
    align-items: center;
    background-color: ${(props) => props.color || Colors.white};
    border-top-left-radius: 43px;
    border-top-right-radius: 43px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 58px;
    padding-top: 61px;
`;
export const HeaderPanelContainer = styled.View.attrs((props) => ({
    ...props.style,
}))`
    width: 100%;
    align-items: center;
    background-color: ${(props) => props.color || Colors.white};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-top: 40px;
    padding-bottom: 25px;
    padding-right: 25px;
    padding-left: 36px;
`;
export const InputElement = styled(Input).attrs((props) => ({
    inputContainerStyle: {
        // borderWidth: 1,
        // borderRadius: 4,
        // paddingHorizontal: 5,
        // height: hp(itemHeight),
        ...props.inputContainerStyle,
    },
    containerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    labelStyle: {
        fontFamily: 'Cabin-Regular',
        fontSize: 16,
        color: Colors.black,
        ...props.labelStyle,
    },
    inputStyle: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        color: Colors.black,
        ...props.inputStyle,
    },
    errorStyle: {
        fontFamily: 'Cabin-Regular',
        color: Colors.errorColor,
        fontSize: 13,
    },
}))``;
export const TextAreaElement = styled(Input).attrs((props) => ({
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
    },
    containerStyle: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    inputStyle: {
        // ...Fonts.input,
        ...props.inputStyle,
    },
    errorStyle: {
        color: Colors.red,
    },
}))``;
export const FullButtonElement = styled(Button).attrs((props) => ({
    containerStyle: {
        width: '100%',
        ...props.containerStyle,
    },
    buttonStyle: {
        height: buttonHeight,
        backgroundColor: props.dark ? Colors.lightDark : Colors.white,
        borderRadius: 30,
        ...props.buttonStyle,
    },
    titleStyle: {
        ...Fonts.button,
        color: props.dark ? Colors.white : Colors.lightDark,
        ...props.titleStyle,
    },
}))``;
export const ButtonElement = styled(Button).attrs((props) => ({
    containerStyle: {
        ...props.containerStyle,
    },
    buttonStyle: {
        height: smallButtonHeight,
        backgroundColor: props.dark ? Colors.lightDark : Colors.white,
        paddingHorizontal: 16,
        borderRadius: 6,
        ...props.buttonStyle,
    },
    titleStyle: {
        ...Fonts.button,
        color: props.dark ? Colors.white : Colors.lightDark,
        ...props.titleStyle,
    },
}))``;
export const LinkButton = styled.Text.attrs({})`
    color: ${(props) => props.color || Colors.blue};
    font-family: 'Cabin-Medium';
    font-size: 14px;
    line-height: 26px;
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.color || Colors.blue};
`;

export const HostButtonElement = styled(Button).attrs((props) => ({
    containerStyle: {
        width: '100%',
        ...props.containerStyle,
    },
    buttonStyle: {
        height: buttonHeight,
        backgroundColor: Colors.black4,
        borderRadius: 30,
        ...props.buttonStyle,
    },
    titleStyle: {
        fontFamily: 'Cabin-Bold',
        fontSize: 16,
        color: Colors.blue3,
        ...props.titleStyle,
    },
}))``;
export const CoverButtonElement = styled(Button).attrs((props) => ({
    containerStyle: {
        width: 230,
        ...props.containerStyle,
    },
    buttonStyle: {
        paddingHorizontal: 40,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.white,
        ...props.buttonStyle,
    },
    titleStyle: {
        fontFamily: 'Cabin-Bold',
        fontSize: 16,
        color: Colors.lightDark,
        ...props.titleStyle,
    },
}))``;
