import React from 'react'
import '../App.scss'

import Menu from '../comps/Menu'

export default {
    title:"Menu",
    component:Menu
}
var furniture_Category = [
    {
        CategoryTitle:"Bed"},
    {
        CategoryTitle:"Cabinet"},
    {
        CategoryTitle:"Desk/Table"},
    {
        CategoryTitle:"Accessory"},
    {
        CategoryTitle:"+ Add more Category",
    },
]

var brand = [
    {
        CategoryTitle:"Magniflex"},
    {
        CategoryTitle:"Poromen"},
    {
        CategoryTitle:"Noble Home"},
    {
        CategoryTitle:"Limitless"},
    {
        CategoryTitle:"+ Add new brand",
    },
]

var series = [
    {
        CategoryTitle:"Alpha"},
    {
        CategoryTitle:"Beta"},
    {
        CategoryTitle:"Omiga"},
    {
        CategoryTitle:"Swan"},
    {
        CategoryTitle:"+ Add new Series",
    },
]
var template = [
    {
        CategoryTitle:"For-Order-Request"},
    {
        CategoryTitle:"For-Customer-Return"},
    {
        CategoryTitle:"For-Customer-Discount"},
    {
        CategoryTitle:"For-Manufacturer-Exchange"
    },
   
]



export const DefaultMenu = () => {
    return <Menu
            droparea={false} 
            />
}
export const FurnitureCategoriesDropDown = () => {
    return <Menu 
            items={furniture_Category}
            droparea={true} 
            placeholder={"--"}
            inputplaceholder={"New Category"}
            />
}
export const BrandsDropDown = () => {
    return <Menu 
            items={brand}
            droparea={true} 
            placeholder={"--"}
            inputplaceholder={"New Brand"}
            />
}
export const seriesDropDown = () => {
    return <Menu 
            items={series}
            droparea={true} 
            placeholder={"--"}
            inputplaceholder={"New Series"}
            />
}
export const VariantDropDown = () => {
    return <Menu 
            variant={true}
            droparea={true}
            placeholder={"Select a variant to order"} 
            />
}
export const TemplateDropDown = () => {
    return <Menu 
            variant={false}
            droparea={true}
            placeholder={"Select a template"} 
            items={template}
            />
}