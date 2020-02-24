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
            onClick ={()=>{alert('Sort')}}
    />
}
export const ShadowBlueButton = () => {
    return <Button
            type = 'shadowBlue'
            onClick ={()=>{alert('Sort')}}
    />
}
export const BlueBorderButton = () => {
    return <Button
            type='borderBlue'
            onClick ={()=>{alert('Sort')}}
    />
}
export const WideBlueButton = () => {
    return <Button
            type='blue'
            wide={true}
            onClick ={()=>{alert('Sort')}}
    />
}
export const WideBorderBlueButton = () => {
    return <Button
            type='borderBlue'
            text='add'
            wide={true}
            onClick ={()=>{alert('Sort')}}
    />
}
export const WideBlueShadowButton = () => {
    return <Button
            type='shadowBlue'
            wide={true}
            onClick ={()=>{alert('Sort')}}
    />
}
export const DeleteButton = () => {
    return <Button 
            type='delete'
            text='-'
            onClick ={()=>{alert('Sort')}}
            />
}