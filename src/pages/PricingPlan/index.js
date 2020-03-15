import React,{useState} from 'react';
import Header from '../../comps/Header';
import { Link } from "react-router-dom";
import PricingBox from '../../comps/PricingBoxes';
//npm packages

function PricingPage(){

    return (
        <div className="wrapper-pricing">
            <div className="flexcenter">
                <h1>Pricing & Plan</h1>
                 <p>Unlock this and more features, generate more profit just at your fingertips, signup today!</p>
            </div>

            <div className="pricing-box-container">
                <PricingBox 
                    title={"Starter"}
                    price={"19.99"}
                    products={"150"}
                    users={"6"}
                    feature1={"Placing Orders"}
                    feature2={"20GB storage"}
                    feature3={"24/7 support"}
                    buttonType={"starter"}
                />
                <PricingBox 
                    title={"Professional"}
                    price={"39.99"}
                    products={"350"}
                    users={"25"}
                    feature1={"Template Features"}
                    feature2={"50GB storage"}
                    feature3={"24/7 support within 5 hours"}
                    buttonType={"Professional"}
                />
                <PricingBox 
                    title={"Enterprise"}
                    price={"69.99"}
                    products={"500"}
                    users={"50"}
                    feature1={"Template Features"}
                    feature2={"1TB storage"}
                    feature3={"24/7 support within 5 hours"}
                    buttonType={"Professional"}
                />
            </div>

            <div style={{height:'150px'}}></div>
           
        </div>
    )
}

export default PricingPage;