import React from 'react';

function CategoryCard({title, sort, onClick}){
    var cn = 'categoryCard_container';
    if(title) {
        cn += ' title_category';
    };
    var sn ='hide'
    if (sort) {
        sn = 'sort';
    }
    return(
        <div className={cn}>
            <div className={sn} onClick={onClick}><img src ={require('../../../imgs/icon-sorting.png')}/></div>
            <div>{title}</div>
        </div>
    );
}
CategoryCard.defaultProps = {
    title: "Title",
    onClick:()=> {}
}
export default CategoryCard;