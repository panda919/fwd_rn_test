import React, { useState, useCallback } from 'react';
import { View, StatusBar, Platform } from 'react-native';
//= ==third party plugins=======
import { Icon, Button, Header } from 'react-native-elements';
import StepIndicator from 'react-native-step-indicator';
import { useFocusEffect } from '@react-navigation/native';

//= ==custom components & containers  =======
import { Content, Container, FocusAwareStatusBar } from '@components';
//= ======selectors==========================

//= ======reducer actions====================

//= ==========apis=======================

//= =============utils==================================
import styled from 'styled-components/native';
import { Colors } from '@theme';
import dummyData from './data';

//= =============styles==================================

import { styles } from './styles';

const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    separatorStrokeUnfinishedWidth: 1,
    separatorStrokeFinishedWidth: 1,
    stepStrokeCurrentColor: 'green',
    separatorFinishedColor: 'green',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'green',
    stepIndicatorUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelAlign: 'flex-start',
};
// AssetType
//= =============images & constants ===============================
//= ============import end ====================

const PageHeader = ({ title }) => {
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
                centerComponent={{
                    text: title,
                    style: styles.titleStyle,
                }}
            />
        </>
    );
};
const HomeScreen = ({ navigation }) => {
    //= ========Hook Init===========
    //= ========= Props Section========
    //= ======== State Section========
    const [currentPage, setCurrentPage] = useState(0);

    //= ========= query Section========
    //= ========= Use Effect Section========
    useFocusEffect(
        useCallback(() => {
            setCurrentPage(0);

            return () => {};
        }, []),
    );
    const renderLabel = useCallback(({ position, stepStatus, label, currentPosition }) => {
        const { title, status } = JSON.parse(label);
        return (
            <Item>
                <ItemTitle>{title}</ItemTitle>
                <ItemStatus>{status}</ItemStatus>
            </Item>
        );
    }, []);
    const renderStepIndicator = useCallback(({ position, stepStatus }) => {
        return stepStatus === 'finished' ? (
            <Icon name="check" type="antdesign" color="white" />
        ) : stepStatus === 'unfinished' ? (
            <Icon name="lock" type="antdesign" color="blue" />
        ) : null;
    }, []);
    const onNext = useCallback(() => {
        if (currentPage === dummyData.data.length) {
            navigation.navigate('First');
            return;
        }
        setCurrentPage((prev) => prev + 1);
    }, [currentPage, navigation]);
    return (
        <Container>
            <PageHeader title="UX Fundamentals" />
            <Content
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.contentView}>
                <View style={styles.stepIndicator}>
                    <PageHeaderItem>
                        <PageHeaderTitle>Introduction to UX</PageHeaderTitle>
                    </PageHeaderItem>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        stepCount={dummyData.data.length}
                        direction="vertical"
                        currentPosition={currentPage}
                        labels={dummyData.data.map((item) => JSON.stringify(item))}
                        renderLabel={renderLabel}
                        renderStepIndicator={renderStepIndicator}
                    />
                    <Button title="Keep Learning" onPress={onNext} />
                </View>
            </Content>
        </Container>
    );
};

export default HomeScreen;
const PageHeaderItem = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.blackDark};
    padding-bottom: 10px;
`;
const PageHeaderTitle = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;
const ItemTitle = styled.Text`
    color: black;
    font-size: 15px;
    font-weight: bold;
`;

const ItemStatus = styled.Text`
    color: gray;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
`;
const Item = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    padding-top: 15px;
`;
