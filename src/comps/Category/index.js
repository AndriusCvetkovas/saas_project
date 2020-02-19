import React from 'react';
import CategoryCard from './CategoryCard';

function Category({titles}){
    var cn = 'category_container';
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