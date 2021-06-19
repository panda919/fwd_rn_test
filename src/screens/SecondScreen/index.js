import React from 'react';

//= ==third party plugins=======

import { Text } from 'react-native-elements';

//= ==custom components & containers  =======
import { Content, Container } from '@components';
import { HomeHeader } from '@containers';

//= ======selectors==========================

//= ======reducer actions====================

//= ==========apis=======================

//= =============utils==================================

//= =============styles==================================
import { styles } from './styles';

// AssetType
//= =============images & constants ===============================
//= ============import end ====================

const SecondScreen = ({ navigation, route }) => {
    //= ========Hook Init===========
    //= ========= Props Section========
    //= ======== State Section========

    //= =========  query Section========
    //= ========= Use Effect Section========
    return (
        <Container>
            <HomeHeader title="Second Screen" />
            <Content
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.contentView}>
                <Text h3>SecondScreen Page</Text>
            </Content>
        </Container>
    );
};

export default SecondScreen;
