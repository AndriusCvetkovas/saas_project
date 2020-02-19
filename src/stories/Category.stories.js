import React from 'react';
import '../App.scss';

import Category from '../comps/Category';

export default {
    title: "Category",
    component: Category
}

var titles = [
    {
        title: 'Product'
    },
    {
        title: 'SKU'
    },
    {
        title: 'Category'
    },
    {
        title: 'Brand'
    },
    {
        title: 'Series'
    },
    {
        title: 'Variant'
    },
    {
        title: 'Inventory'
    },
];
var titlesSort = [
    {
        title: 'Product',
        sort: false,
        
    },
    {
        title: 'SKU',
        sort: true,
        onClick:()=>{alert('Sort')},
    },
    {
        title: 'Category',
        sort: true,
        onClick:()=>{alert('Sort')}
    },
    {
        title: 'Brand',
        sort: true,
        onClick:()=>{alert('Sort')}
    },
    {
        title: 'Series',
        sort: true,
        onClick:()=>{alert('Sort')}
    },
    {
        title: 'Variant',
        sort: true,
        onClick:()=>{alert('Sort')}
    },
    {
        title: 'Inventory',
        sort: true,
        onClick:()=>{alert('Sort')}
    },
];

export const DefaultCategory = () => {
    return <Category
    />
}
export const CategoriesTitle = () => {
    return <Category
        titles={titles}
    />
}
export const CategoriesTitleWithSort = () => {
    return <Category
        titles={titlesSort}
    />
}
