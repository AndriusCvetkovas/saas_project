import React from 'react';
import '../App.scss';

import Checkmark from '../comps/Checkmark';

export default {
    title: "Checkmark",
    component: Checkmark
}
export const DefaultCheckmark = () => {
    return <Checkmark
    />
}
export const CheckmarkChecked = () => {
    return <Checkmark
    stat = {true}
    />
}
