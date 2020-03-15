import React from 'react';

function PlanDetails({products,users,feature1,feature2,feature3,feature4}){
    return (
        <div>
            <ul>
                <li>{products}</li>
                <li>{users}</li>
                <li>{feature1}</li>
                <li>{feature2}</li>
                <li>{feature3}</li>
                <li>{feature4}</li>
            </ul>
        </div>
    )
}

PlanDetails.defaultProps = {
    products:"",
    users:"",
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
}

export default PlanDetails;