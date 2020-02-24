import React from 'react';
import '../App.scss';

import Notes from '../comps/Notes';

export default {
    title: "Notes",
    component: Notes
}
export const DefaultNotes = () => {
    return <Notes
    />
}
export const NotesWithPlaceholder = () => {
    return <Notes
        content = ''
        placeholder = 'Delivery notes'
    />
}