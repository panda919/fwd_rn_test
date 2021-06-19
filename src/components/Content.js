import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { Metrics } from '@theme';

class Content extends PureComponent {
    render() {
        const {
            children,
            contentContainerStyle,
            disableKBDismissScroll,
            keyboardShouldPersistTaps,
            padder,
        } = this.props;

        return (
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
                ref={(c) => {
                    this._scrollview = c;
                    this._root = c;
                }}
                {...this.props}
                contentContainerStyle={[
                    { ...(padder && Metrics.horizontalPadding) },
                    { ...(padder && Metrics.tinyVerticalPadding) },
                    contentContainerStyle,
                ]}>
                {children}
            </KeyboardAwareScrollView>
        );
    }
}

Content.propTypes = {
    disableKBDismissScroll: PropTypes.bool,
    keyboardShouldPersistTaps: PropTypes.string,
    padder: PropTypes.bool,
    isSafe: PropTypes.bool,
};
Content.defaultProps = {
    disableKBDismissScroll: false,
    keyboardShouldPersistTaps: 'handled',
    padder: false,
    isSafe: true,
};
export default Content;
