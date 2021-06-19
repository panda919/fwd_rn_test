import { StyleSheet } from 'react-native';
import { Colors } from '@theme';
import { wp, hp, adjustFontSize } from '@src/common/responsive';

export const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
    },
    contentView: {
        backgroundColor: Colors.grey,
        flex: 1,
        flexGrow: 1,
        width: '100%',
    },
    titleStyle: {
        fontSize: adjustFontSize(15),
        color: Colors.primary,
        fontWeight: '400',
    },
    pagerViewContainer: {
        flex: 1,
    },
    iconDisabledStyle: {
        backgroundColor: 'transparent',
    },
    pageNumberControl: {
        width: '60%',
    },
});
