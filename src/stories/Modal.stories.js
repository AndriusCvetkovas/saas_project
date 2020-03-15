import React from 'react';
import '../App.scss';

import ModalCard from '../comps/Modal';

export default {
    title: "ModalCard",
    component: ModalCard
}
export const DefaultModal = () => {
    return <ModalCard
    />
}
export const ModalWithQuestionmark = () => {
    return <ModalCard
    mark={'question'}
    buttons={2}
    message={'Do you really want to do this?'}
    />
}