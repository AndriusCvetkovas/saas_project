import React from 'react';
import '../App.scss';

import CategoryStats from '../comps/CategoryStats';

export default {
    title: "CategorySatats",
    component: CategoryStats
}
export const DefaultCategoryStats = () => {
    return <CategoryStats
    />
}
export const DefaultCategoryStatsWithTitles = () => {
    return <CategoryStats
        itemTitle1 = {'Sofa/Chair'}
        itemTitle2 = {'Sold:'}
        value1 = {23334.44}
        value2 = {12355.32}
        month1 = {'June'}
        month2 = {'July'}
    />
}