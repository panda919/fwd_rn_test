import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '@theme';
import { adjustFontSize } from '@common/responsive';

export const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentView: {
        width: '90%',
        marginTop: -20,
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: Colors.grey,
        shadowColor: Colors.lightDark,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        marginVertical: 30,
    },
    stepIndicator: {
        marginVertical: 30,
        paddingHorizontal: 20,
    },
    titleStyle: {
        fontSize: adjustFontSize(20),
        color: Colors.white,
        fontWeight: '400',
    },
});
