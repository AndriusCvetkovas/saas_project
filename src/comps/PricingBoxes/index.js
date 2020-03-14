import React, {useState, useRef, useEffect} from 'react';
import Button from '../../comps/Button';


function PricingBox({title,price,products,users,feature1,feature2,feature3,buttonType}){  
    var type;
    var hover = false;

    const [box, setBox] = useState("container");
    
    if(buttonType === "starter"){
        type = 'borderBlue';
    }
    if(buttonType === "Professional"){
        type = 'blue';
    }
    return(
        <div className={box} onMouseOver={()=>{setBox("largercontainer")}} onMouseOut={()=>{setBox("container")}}>
            <div className="flexcenter" style={{marginTop:"20px"}}>
                <h2>{title}</h2>
            </div>

            <div className="flexcenter" style={{marginTop:"-30px"}}>
                <h3 className="price">{price}<span style={{color:"black",fontSize:15}}>/mo</span></h3>
            </div>
            
            <div className="flexcenter" style={{marginTop:"30px"}}>
                <p>{products} products</p>
            </div>

            <div className="flexcenter" style={{backgroundColor:"#F0F6F7"}}>
                <p>{users} users</p>
            </div>

            <div className="flexcenter">
                <p>{feature1}</p>
            </div>

            <div className="flexcenter" style={{backgroundColor:"#F0F6F7"}}>
                <p>{feature2}</p>
            </div>

            <div className="flexcenter">
                <p>{feature3}</p>
            </div>

            <div className="buttons-style">
                <Button 
                    type={type}
                    wide={true}
                    text={"Sign Up"}
                />
            </div>

        </div>
    )
}

PricingBox.defaultProps = {
   title:"default",
   price:"19.99",
   products:"150",
   users:"6",
   feature1:"Placing Orders",
   feature2:"20GB storages",
   feature3:"24/7 support",
   buttonType:"starter"
}
export default PricingBox;
