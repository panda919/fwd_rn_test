import { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Keyboard } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

//= ======selectors==========================
import { logger } from 'react-native-logs';
import { v4 as uuidv4 } from 'uuid';

import * as constants from '@utils/constant';

const log = logger.createLogger();

const useComponentWillMount = (func) => {
    const willMount = useRef(true);
    if (willMount.current) {
        func();
    }
    useComponentDidMount(() => {
        willMount.current = false;
    });
};

const useComponentDidMount = (func) => useEffect(func, []);

export const useKeyboard = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    const onKeyboardDidShow = useCallback((e) => {
        setKeyboardHeight(e.endCoordinates.height);
    }, []);

    const onKeyboardDidHide = useCallback(() => {
        setKeyboardHeight(0);
    }, []);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
        return () => {
            Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, [onKeyboardDidHide, onKeyboardDidShow]);

    return [keyboardHeight];
};
export const useIsMountedRef = () => {
    const isMountedRef = useRef(null);
    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    });
    return isMountedRef;
};
export const useComponentSize = () => {
    const [size, setSize] = useState(null);

    const onLayout = useCallback((event) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);

    return [size, onLayout];
};
export const useUpdateLayoutEffect = (effect = () => {}, dependencies = []) => {
    const isInitialMount = useRef(true);

    useLayoutEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            effect();
        }
    }, dependencies);
};
