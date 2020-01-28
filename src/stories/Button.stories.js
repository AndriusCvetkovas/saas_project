import React from 'react';
import '../App.scss';

import Button from '../comps/Button';

export default {
    title: "Buttons",
    component: Button
}

export const DefaultButton = () => {
    return <Button
    />
}
export const BlueButton = () => {
    return <Button
            text='Add'
            type = 'blue'
    />
}
export const ShadowBlueButton = () => {
    return <Button
            
            type = 'shadowBlue'
    />
}
export const BlueBorderButton = () => {
    return <Button
            type='borderBlue'
    />
}
export const WideBlueButton = () => {
    return <Button
            type='blue'
            wide={true}
    />
}
export const WideBorderBlueButton = () => {
    return <Button
            type='borderBlue'
            text='add'
            wide={true}
    />
}
export const WideBlueShadowButton = () => {
    return <Button
            type='blue'
            wide={true}
    />
}
export const DeleteButton = () => {
    return <Button 
            type='delete'
            text='-'
            />
}