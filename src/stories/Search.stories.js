import React from 'react';
import '../App.scss';

import Search from '../comps/Search';

export default {
    title: "Search",
    component: Search
}
export const DefaultSearch = () => {
    return <Search
    />
}
export const SearchWithShadow = () => {
    return <Search
        shadow={true}
    />
}
export const SearchWide = () => {
    return <Search
        wide={true}
        shadow={true}
    />
}
export const SearchWithPlaceHolder = () => {
    return <Search
        showplaceholder={true}
        placeholder= 'Search bar placeholder'
        wide={true}
        shadow={true}
    />
}