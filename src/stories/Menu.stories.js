import React from 'react'
import '../App.scss'

import Menu from '../comps/Menu'
import MenuItems from '../comps/Menu/MenuItems'

export default {
    title:"Menu",
    component:Menu
}
var furniture_Category = [
    {CategoryTitle:"Bed"},
    {CategoryTitle:"Cabinet"},
    {CategoryTitle:"Desk/Table"},
    {CategoryTitle:"Accessory"},
    {CategoryTitle:"+ Add more Category"},
]

export const DefaultMenu = () => {
    return <Menu
            droparea={false} 
            value=""
            />
}
export const FurnitureCategories = () => {
    return <Menu 
            furniture_Category={furniture_Category}
            droparea={true} 
            value="--"
            />
}
