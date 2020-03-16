import React, {useState, useEffect} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Search from '../../comps/Search';
import Category from '../../comps/Category';
import List from '../../comps/List';
import Checkmark from '../../comps/Checkmark';

import PricingPage from '../PricingPlan';
import Modal from 'react-modal';
import ModalCard from '../../comps/Modal';

function InventoryOrders(){
    
//Modal logic
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
  
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);

    var modalMessage = 'Do you want to send all selected orders?';
    var modalButtons = 2;

    function closeModal(){
        setIsOpen(false);
        console.log('close')
    };

    var titlesSort = [
        {
            title: 'Order No.',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Order Date',
            sort: true,
            onClick:()=>{alert('Sort')},
        },
        {
            title: 'Amount',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total Quantity',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Total Price',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Manufacturer',
            sort: true,
            onClick:()=>{alert('Sort')}
        },
        {
            title: 'Approval',
            sort: false
        },
    ];
    var orders = [
        {
            itemTitle:'Item 1',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241240</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 9,000',
            itemCol3: '4',
            itemCol4: '$ 36,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241241</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 12,000',
            itemCol3: '10',
            itemCol4: '$ 120,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 2',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241242</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 10,000',
            itemCol3: '4',
            itemCol4: '$ 40,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 1,
        },
        {
            itemId:'Item 3',
            itemCol0: <a href='#' onClick={()=> setShowOrder(!showOrder)}>241243</a>,
            itemCol1: '02/02/20',
            itemCol2: '$ 15,000',
            itemCol3: '3',
            itemCol4: '$ 45,000',
            itemCol5: 'Magniflex',
            sales: true,
            apr: 0,
        },
    ];
    var hide = '';
    var show = 'hide';
    const [showOrder, setShowOrder] = useState(false);
    if(showOrder){
        hide = 'hide';
        show = '';
    }
    var butStyle = 'shadowBlue';
    var hideCheckmarks = false;
    const [cc, setCc] = useState(true);
    var checkmarkCont = '';
    
    if(cc == true){
        modalButtons = 1;
        modalMessage = 'Please make a selection'
    }
    if(sessionStorage.getItem('payment') =='Professional'){
        butStyle = '';
        hideCheckmarks = true;
        checkmarkCont = 'hide';
        return(
            <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
                <Header 
                    title={'Inventory/Pending Orders'} 
                />
                <Button 
                    type={butStyle}
                    wide={true}
                    text='Send All Requests'
                    setIsOpen={setIsOpen}
                    onClick={setIsOpen}
                />
                <Search
                    shadow={true}
                    showplaceholder={true}
                    placeholder= 'Search for inventory orders'
                    wide={true}
                />
                <div style ={{display: 'flex', flexDirection: 'row', alignItems:'center', marginTop: 30}}>
                    <div className={checkmarkCont} style={{display: 'relative', maxWidth: 35, flex: 0.5}} onClick={()=>setCc(!cc)}><Checkmark stat={cc}/></div>
                        <Category
                    titles={titlesSort}
                />
                </div>
                <List
                        items = {orders}
                        ord = {true}
                        cc = {cc}
                        hide = {hideCheckmarks}
                        setIsOpen3={setIsOpen3}
                />
                <Modal
                    isOpen={modalIsOpen3}
                    style={customStyles}
                    onRequestClose={closeModal}
                >
                    <ModalCard 
                        mark={'question'}
                        message={'Do you want to send an order to Magniflex?'}
                        buttons={2}
                        setIsOpen3={setIsOpen3}
                        setIsOpen2={setIsOpen2}
                        modalIsOpen2={modalIsOpen2}
                    />
                </Modal>
                <Modal
                    isOpen={modalIsOpen2}
                    style={customStyles}
                    onRequestClose={closeModal}
                >
                    <ModalCard 
                        mark={'checkmark'}
                        message={'Your orders have been sent'}
                        buttons={1}
                        setIsOpen={setIsOpen}
                    />
                </Modal>
            </div>
        )
    } else if(sessionStorage.getItem('payment') == 'Enterprise') {
        return(
            <div style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
                <Header 
                    title={'Inventory/Pending Orders'} 
                />
                <Button 
                    type={butStyle}
                    wide={true}
                    text='Send All Requests'
                    onClick={setIsOpen}
                />
                <Search
                    shadow={true}
                    showplaceholder={true}
                    placeholder= 'Search for inventory orders'
                    wide={true}
                />
                <div style ={{display: 'flex', flexDirection: 'row', alignItems:'center', marginTop: 30}}>
                    <div className={checkmarkCont} style={{display: 'relative', maxWidth: 35, flex: 0.5}} onClick={()=>setCc(!cc)}><Checkmark stat={cc}/></div>
                        <Category
                    titles={titlesSort}
                />
                </div>
                <List
                        items = {orders}
                        ord = {true}
                        cc = {cc}
                        hide = {hideCheckmarks}
                        setIsOpen3={setIsOpen3}
                />
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={closeModal}
                >
                    <ModalCard 
                        mark={'question'}
                        message={modalMessage}
                        buttons={modalButtons}
                        setIsOpen={setIsOpen}
                        setIsOpen2={setIsOpen2}
                        modalIsOpen2={modalIsOpen2}
                    />
                </Modal>
                <Modal
                    isOpen={modalIsOpen3}
                    style={customStyles}
                    onRequestClose={closeModal}
                >
                    <ModalCard 
                        mark={'question'}
                        message={'Do you want to send an order to Magniflex?'}
                        buttons={2}
                        setIsOpen3={setIsOpen3}
                        setIsOpen2={setIsOpen2}
                        modalIsOpen2={modalIsOpen2}
                    />
                </Modal>
                <Modal
                    isOpen={modalIsOpen2}
                    style={customStyles}
                    onRequestClose={closeModal}
                >
                    <ModalCard 
                        mark={'checkmark'}
                        message={'Your orders have been sent'}
                        buttons={1}
                        setIsOpen={setIsOpen}
                    />
                </Modal>
                
            </div>
        )
    }else {
        return (
            <div>
                <div className='op' style = {{marginLeft: '39px', marginTop: '39px', overflowY: 'auto'}}>
                    <Header 
                        title={'Inventory/Pending Orders'} 
                    />
                    <Button 
                        type={butStyle}
                        wide={true}
                        text='Send All Requests'
                    />
                    <Search
                        shadow={true}
                        showplaceholder={true}
                        placeholder= 'Search for inventory orders'
                        wide={true}
                    />
                    <div style ={{marginTop: 30, display: 'block'}}>
                        <div style={{maxWidth: 35, minWidth: 35}} onClick={()=>setCc(!cc)}><Checkmark /></div>
                        <Category
                            titles={titlesSort}
                        />
                    </div>
                    <List
                            items = {orders}
                            ord = {true}
                            cc = {cc}
                    />
                </div>
                <PricingPage />
            </div>
        )
    }
    
}
export default InventoryOrders;