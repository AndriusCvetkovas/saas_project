import React from 'react';
import CategoryCard from './CategoryCard';

function Category({titles, boxed}){
    var cn = 'category_container';
    if(boxed){
        cn = 'category_container_boxed';
    }
        return(
            <div className={cn}>
                
                {titles.map((o, i)=>{
                            return <CategoryCard {...o}/>
                    })}
            </div>
        )
};

Category.defaultProps= {
    titles: [{
        title: 'Default'
    }]
};
export default Category;