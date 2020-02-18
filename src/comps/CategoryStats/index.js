import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function CategoryStats({itemTitle1, itemTitle2, value1, value2, month1 ,month2}){
    return(
        <div className='stat_box'>
            <h1>{itemTitle1}</h1>
            <h2>{itemTitle2}</h2>
            <PieChart
                style = {{marginTop: -90, marginBottom: -70}}
                radius = {20}
                startAngle = {270}
                data={[
                    { title: 'One', value: value1, color: '#0096A9' },
                    { title: 'Two', value: value2, color: '#D8D8D8' },
                ]}
            />
            <div className='value_wrapper'>
                <div className = 'value_div'>
                    ${value1}
                    <br/>
                    {month1}
                </div>
                <div className = 'value_div value2'>
                    ${value2}
                    <br/>
                    {month2}
                </div>
            </div>
            
            
        </div>
    )
};
CategoryStats.defaultProps = {
        itemTitle1: 'Default',
        itemTitle2: 'Default:',
        value1: 50,
        value2: 50,
        month1: 'defaultMonth1',
        month2: 'defaultMonth2'
}
export default CategoryStats