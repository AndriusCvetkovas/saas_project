import React from 'react';
import '../App.scss';

import Modal from '../comps/Modal';

export default {
    title: "Modal",
    component: Modal
}
export const DefaultModal = () => {
    return <Modal
    />
}
export const ModalWithQuestionmark = () => {
    return <Modal
    mark={'question'}
    buttons={2}
    message={'Do you really want to do this?'}
    />
}