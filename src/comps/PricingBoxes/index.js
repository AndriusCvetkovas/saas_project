import React, {useState, useRef, useEffect} from 'react';
import Button from '../../comps/Button';
import CheckOutPage from '../../pages/CheckOutPage';
import Modal from 'react-modal';

function PricingBox({title,price,products,users,feature1,feature2,feature3,buttonType}){  
    var type;
    var hover = false;
    var onClick = '';
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
    const [box, setBox] = useState("container-pricing");
    
    const [modalIsOpen, setIsOpen] = useState(false);

    if(buttonType === "starter"){
        type = 'borderBlue';
    }
    if(buttonType === "Professional"){
        type = 'blue';
        onClick = function(){setIsOpen(!modalIsOpen)}
    }

    function closeModal(){
        setIsOpen(false);
        console.log('close')
    };
    var details = {};
    if(title == 'Professional'){
        details = {
            products: 350,
            users: 25,
            feature1: "Placing Orders",
            feature2:"Template Features",
            feature3:"50GB storage",
            feature4:"24/7 support within 5 hours",
            price: '39.99',
            pst: '2.8',
            gst: '2',
            total: '44.79',
            selection: 'Professional'
        }
    }else {
        details = {
            products: 500,
            users: 50,
            feature1: "Placing Orders",
            feature2:"Template Features",
            feature3:"1TB storage",
            feature4:"24/7 support within 5 hours",
            price: '69.99',
            pst: '4.9',
            gst: '3.5',
            total: '78.39',
            selection: 'Enterprise'
        }
    }

    return(
        <div className={box} onMouseOver={()=>{setBox("largercontainer")}} onMouseOut={()=>{setBox("container-pricing")}}>
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
                    onClick={onClick}
                    text={"Sign Up"}
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}
            >
                <CheckOutPage setIsOpen={setIsOpen} details ={details} /> 
            </Modal>

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
