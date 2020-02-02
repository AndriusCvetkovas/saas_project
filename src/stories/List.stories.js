import React from 'react';
import '../App.scss';

import List from '../comps/List';

export default {
    title: "Lists",
    component: List
}

var items = [
    {
        itemTitle:'Item 1',
        itemImage: '',
        itemCol1: 'MTRS-M1',
        itemCol2: 'Sofa',
        itemCol3: 'Magniflex',
        itemCol4: '-',
        itemCol5: true,
    },
    {
        itemTitle:'Item 2',
        itemImage: '',
        itemCol1: 'MTRS-M2',
        itemCol2: 'Chair',
        itemCol3: 'Magniflex',
        itemCol4: 'Mono',
        itemCol5: false,
    },
];
var orders = [
    {
        itemTitle:'Item1',
        itemImage: '',
        itemCol1: '1',
        itemCol2: '3',
        itemCol3: '2',
        itemCol4: '1',
        itemCol5: '$300',
        itemCol6: '$3005'

    }
]
export const DefaultList = () => {
    return <List
    type ='default'
    i = {true}
    />
}
export const ItemCardList = () => {
    return <List
        items = {items}
        i = {true}
    />
}
export const OrderCardList = () => {
    return <List
        orders = {orders}
        i = {false}
    />
}