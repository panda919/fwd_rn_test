import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { View, StatusBar, Platform, ImageBackground } from 'react-native';
//= ==third party plugins=======
import { Icon, Header } from 'react-native-elements';
import PagerView from 'react-native-pager-view';

//= ==custom components & containers  =======
import { Content, Container, FocusAwareStatusBar } from '@components';
import { RowSpaceAround, RowSpaceBetween } from '@common/StyledComponents';
//= ======selectors==========================

//= ======reducer actions====================

//= ==========apis=======================

//= =============utils==================================
import styled from 'styled-components/native';
import { Colors } from '@theme';

//= =============styles==================================
import { hp } from '@src/common/responsive';

import { styles } from './styles';

const faker = require('faker');

//= =============images & constants ===============================
//= ============import end ====================

const fakeData = Array(10)
    .fill('')
    .map((item, i) => ({
        key: `${i}`,
        id: `${i}`,
        content: faker.lorem.paragraphs(),
        title: faker.lorem.words(),
        photo: faker.image.image(),
    }));
const prasePageText = (page) => {
    if (page < 10) return `0${page}`;
    else return page;
};
const PageHeader = ({ title, navigation }) => {
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
                    { marginTop: (StatusBar.currentHeight || 0) * -1 },
                    { backgroundColor: 'transparent' },
                ]}
                leftComponent={{
                    icon: 'left',
                    type: 'antdesign',
                    color: Colors.primary,
                    size: 25,
                    onPress: () => {
                        navigation.goBack();
                    },
                }}
                centerComponent={{
                    text: title,
                    style: styles.titleStyle,
                }}
            />
        </>
    );
};
const ItemContent = React.memo(
    ({ item }) => {
        const { content, photo, title } = item;
        return (
            <View style={{ backgroundColor: 'transparent' }}>
                <BackGroundImage source={{ uri: photo }}>
                    <ItemContentTitle>{title}</ItemContentTitle>
                </BackGroundImage>
                <ItemContentText>{content}</ItemContentText>
            </View>
        );
    },
    (prevProps, nextProps) => {
        return prevProps.item?.id === nextProps.item?.id;
    },
);
const FirstScreen = ({ navigation, route }) => {
    //= ========Hook Init===========
    //= ========= Props Section========
    const PageScrollViewRef = useRef(null);
    //= ======== State Section========
    const [currentPage, setCurrentPage] = useState(0);

    //= ========= Use Effect Section========
    useEffect(() => {
        return () => {};
    }, []);
    const pageHeadText = useMemo(() => {
        return prasePageText(currentPage + 1);
    }, [currentPage]);
    const onNext = useCallback(() => {
        if (currentPage === fakeData.length - 1) {
        } else {
            setCurrentPage((prev) => prev + 1);
        }
    }, [currentPage]);
    const onPrev = useCallback(() => {
        if (currentPage === 0) {
        } else {
            setCurrentPage((prev) => prev - 1);
        }
    }, [currentPage]);
    useEffect(() => {
        PageScrollViewRef.current?.setPage(currentPage);
        return () => {};
    }, [currentPage]);

    const { isDisabledPrev, isDisabledNext } = useMemo(() => {
        const data = { isDisabledPrev: false, isDisabledNext: false };
        if (currentPage === 0) {
            data.isDisabledPrev = true;
        } else if (currentPage === fakeData.length - 1) {
            data.isDisabledNext = true;
        }
        return data;
    }, [currentPage]);

    return (
        <Container>
            <PageHeader
                title={`Chapter: ${pageHeadText} | Need to invest`}
                navigation={navigation}
            />
            <Content
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.contentView}>
                <PagerView
                    style={styles.pagerViewContainer}
                    initialPage={0}
                    scrollEnabled={false}
                    ref={PageScrollViewRef}>
                    {fakeData.map((item, index) => {
                        return <ItemContent key={item.key} item={item} />;
                    })}
                </PagerView>
            </Content>
            <BottomContent>
                <Icon name="dots-three-vertical" type="entypo" color={Colors.black} />
                <RowSpaceAround style={styles.pageNumberControl}>
                    <Icon
                        name="left"
                        type="antdesign"
                        color={isDisabledPrev ? Colors.blackGrey : Colors.black}
                        onPress={onPrev}
                        disabled={isDisabledPrev}
                        disabledStyle={styles.iconDisabledStyle}
                    />
                    <ActivePageNumberText>
                        {pageHeadText}
                        <PageNumberText>{` / ${fakeData.length}`}</PageNumberText>
                    </ActivePageNumberText>
                    <Icon
                        name="right"
                        type="antdesign"
                        onPress={onNext}
                        color={isDisabledNext ? Colors.blackGrey : Colors.black}
                        disabled={isDisabledNext}
                        disabledStyle={styles.iconDisabledStyle}
                    />
                </RowSpaceAround>

                <Icon
                    name="git-commit-outline"
                    type="ionicon"
                    color={Colors.black}
                    iconStyle={{ transform: [{ rotate: '90deg' }] }}
                />
            </BottomContent>
        </Container>
    );
};

export default FirstScreen;
const BackGroundImage = styled(ImageBackground)`
    width: 100%;
    height: ${hp(300)}px;
`;
const ItemContentText = styled.Text`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    color: ${Colors.blackDark};
`;
const ItemContentTitle = styled.Text`
    color: ${Colors.black};
    font-weight: bold;
    text-align: center;
`;
const BottomContent = styled(RowSpaceBetween)`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
`;
const ActivePageNumberText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.blackDark};
`;
const PageNumberText = styled.Text`
    font-size: 15px;
    color: ${Colors.blackDark};
`;
