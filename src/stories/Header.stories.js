import React from 'react';
import '../App.scss';

import Header from '../comps/Header';

export default {
    title: "Header",
    component: Header
};
export const DefaultHeader = () => {
    return <Header
    />
}
export const HeaderWithText = () => {
    return <Header
        title={'Inventory/Overview'}
    />
}