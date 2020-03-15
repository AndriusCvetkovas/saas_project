import React, {useState} from 'react';
import Menu from '../../comps/Menu';
import PlanDetails from '../../comps/Plan_Details'
import Button from '../../comps/Button';
import PaymentStripe from '../../comps/PaymentStripe';

function CheckOutPage({setIsOpen, details}){

    const [clicked, setclicked] = useState("underline-active");
    const [clicked2, setclicked2] = useState("underline");
    const [card, setCard] = useState("card-details-box-active");
    const [company, setCompany] = useState("company-info-box");
    const [closed, setClosed] = useState(false);
    if(closed){
        setIsOpen(false);
    }

    var plans = [
        {
            CategoryTitle:"Professional"},
        {
            CategoryTitle:"Starter"},
        {
            CategoryTitle:"Enterprise"},
    ];
    
    if(plans.CategoryTitle == 'Enterprise'){
        
    }
    return (
        <div className="checkout-container">
            <div className="left_checkout">
                <div className="plan-selection-box">
                    <p style={{fontSize:25, margin:2}}>Your Plan:</p>
                    <Menu 
                        droparea={true}
                        placeholder={details.selection} 
                        items={plans}
                        type={"plan-selection"}
                    />
                    <div style={{marginTop:"10px"}}>
                        <PlanDetails 
                            products={` ${details.products} Products`}
                            users={`${details.users} Users`}
                            feature1={details.feature1}
                            feature2={details.feature2}
                            feature3={details.feature3}
                            feature4={details.feature4}
                        />
                    </div>

                    <div className="cost-box">
                        <h2>{details.price}</h2>
                        <div className="cost-row">
                            <p>Pst(7%)</p>
                            <p>......................................................................</p>
                            <p>${details.pst}</p>
                        </div>
                        <div className="cost-row">
                            <p>Gst(5%)</p>
                            <p>......................................................................</p>
                            <p>${details.gst}</p>
                        </div>
                        <div className="cost-row">
                            <p>Total</p>
                            <p>......................................................................</p>
                            <p>${details.total}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="invoice-box">
                    <div className="invoice-details">
                        <p>Invoice ID:</p>  
                        <p>ES123456789</p>
                        <p>Next payment</p>   
                        <p>23 October 2021</p>  
                    </div>  
                </div>

            </div>
            <div className="right_checkout">
                <h1 style={{position:"absolute", top:"5%", left:"16%"}}>Payment Methods</h1>
                 <div className="payment-method-box">
                     <div className="userinfo-row">
                         <div className={"info-title"} onClick={()=>{
                                 setclicked("underline-active");
                                 if(clicked2 == "underline-active"){
                                     setclicked2("underline");
                                 }
                                 setCard("card-details-box-active");
                                 setCompany("company-info-box");
                             }}>
                             <p style={{color:{}}}>Card Information</p>
                             <div className={clicked}></div>
                         </div>
                         <div className={"info-title"} onClick={()=>{
                            setclicked2("underline-active");
                            if(clicked == "underline-active"){
                                setclicked("underline");
                            }
                            setCompany("company-info-box-active");
                            setCard("card-details-box");
                             }}>
                             <p>Company Information</p>
                             <div className={clicked2}></div>
                         </div>
                     </div>

                     <div className={card}>
                         {/* Card information goes in here*/}
                         <PaymentStripe setClosed={setClosed} paymentfor={details.selection} />
                         
                     </div>

                     <div className={company}>
                         <form style={{width:"100%"}}>
                             <p>Country</p>
                             <input type="text"></input>
                             <p>Company Name</p>
                             <input type="text"></input>
                             
                             <div className="input-row">
                                <div>
                                    <p>Street address</p>
                                    <input type="text"></input>
                                </div>

                                <div>
                                    <p>Unit</p>
                                    <input type="text"></input>
                                </div>
                             </div>

                             <div className="input-row">
                                <div>
                                    <p>City</p>
                                    <input type="text"></input>
                                </div>

                                <div>
                                    <p>Province</p>
                                    <input type="text"></input>
                                </div>
                             </div>

                             <div className="input-row">
                                <div>
                                    <p>Postal code</p>
                                    <input type="text"></input>
                                </div>

                             </div>
                         </form>

                         <div className="save-button">
                             <Button 
                                type='longwideshadowBlue'
                                wide={true}
                                text="Save"
                             />
                             <div style={{color:"#0096A9"}}> Cancel </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default CheckOutPage;