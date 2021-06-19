import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors, Fonts } from '@theme';
import { Header } from 'react-native-elements';
import { FocusAwareStatusBar } from '@components';
import { useNavigation } from '@react-navigation/native';

const IconSize = 25;

const HomeHeader = ({ title = '', titleStyle }) => {
    const navigation = useNavigation();

    //= ======== State Section========
    return (
        <>
            <FocusAwareStatusBar
                translucent
                barStyle="dark-content"
                backgroundColor={Colors.backgroundColor}
            />
            <Header
                statusBarProps={{
                    translucent: true,
                    backgroundColor: 'transparent',
                }}
                containerStyle={[
                    Platform.select({
                        android: Platform.Version <= 20 ? { paddingTop: 0, height: 56 } : {},
                    }),
                    { marginTop: (StatusBar.currentHeight || 0) * -1, paddingBottom: 20 },
                    { backgroundColor: Colors.blue },
                ]}
                leftComponent={{
                    icon: 'menu',
                    type: 'ionicons',
                    color: Colors.primary,
                    size: IconSize,
                    onPress: () => {},
                }}
                centerComponent={{
                    text: title,
                    style: [styles.titleStyle, titleStyle],
                }}
            />
        </>
    );
};
HomeHeader.propTypes = {
    titleStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
HomeHeader.defaultProps = {
    titleStyle: {},
};
export default React.memo(HomeHeader);

const styles = StyleSheet.create({
    titleStyle: {
        ...Fonts.title,
        color: Colors.black,
        fontWeight: '400',
    },
});
