import React from 'react';

function PaymentInfo({discount, subtotal, gst, pst, shipping, shippingGST, total, paid}){
    return(
        <div className='payment_info_container'>
            <div className='top_payment_info'>
                <div className='line'>
                    <div>
                        Discount
                    </div>
                    <div className='amount'>
                        {discount}
                    </div>
                </div>
                <div className='line'>
                    <div>
                        Subtotal
                    </div>
                    <div className='amount'>
                        {subtotal}
                    </div>
                </div>
                <div className='line'>
                    <div>
                        GST (5%)
                    </div>
                    <div className='amount'>
                        {gst}
                    </div>
                </div>
                <div className='line'>
                    <div>
                        PST(7%)
                    </div>
                    <div className='amount'>
                        {pst}
                    </div>
                </div>
                <div className='line'>
                    <div>
                        Shipping Fee
                    </div>
                    <div className='amount'>
                        {shipping}
                    </div>
                </div>
                <div className='line'>
                    <div>
                        Shipping Fee(GST 5%)
                    </div>
                    <div className='amount'>
                        {shippingGST}
                    </div>
                </div>
            </div>
            <div className='bottom_payment_info'>
                <div className='line'>
                    <div>
                        Total Payable
                    </div>
                    <div className='amount'>
                        {total}
                    </div>
                </div>
                
                <div className='line'>
                    <div>
                        Total Amount Paid
                    </div>
                    <div className='amount'>
                        {paid}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

PaymentInfo.defaultProps = {
    discount: '$ 0',
    subtotal: '$ 0',
    gst: '$ 0',
    pst: '$ 0',
    shipping: '$ 0',
    shippingGST: '$ 0', 
    total: '$ 0', 
    paid: '$ 0'
}
export default PaymentInfo;
