import React from 'react';
import PieChart from 'react-minimal-pie-chart';

function CategoryStats({itemTitle1, itemTitle2, value1, value2, month1 ,month2, dollar}){
    var sign = '';
    var marginT = -75;
    var marginB = -60;
    if(dollar){
        sign = '$';
        marginT = -90;
        marginB = -70;

    };
    return(
        <div className='stat_box'>
            <h1>{itemTitle1}</h1>
            <h2>{itemTitle2}</h2>
            <PieChart
                style = {{marginTop: marginT, marginBottom: marginB}}
                radius = {20}
                startAngle = {270}
                data={[
                    { title: month1, value: value1, color: '#0096A9' },
                    { title: month2, value: value2, color: '#D8D8D8' },
                ]}
            />
            <div className='value_wrapper'>
                <div className = 'value_div'>
                    {sign}{value1}
                    <br/>
                    {month1}
                </div>
                <div className = 'value_div value2'>
                    {sign}{value2}
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