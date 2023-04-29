import React from 'react'
import './pay.scss'

const Payment = ({name}) => {
  const showAccount = () => {
    const account = document.getElementById('acc');
    account.classList.toggle('show');
  }
  return (
    <div className='payment'>
        <h3>Welcome {name}, please choose any payment gateway to make Payment</h3>
        <p>Please note, payment certify your registration and only two installment is allowed</p>
        <div className="pay">
        <a href="https://flutterwave.com/pay/davetonacademy" target='_blank' rel="noreferrer">Pay via FlutterWave</a>
        <button onClick={showAccount}>Make direct bank transfer</button>
        <div className='account' id="acc">
          <h2>Account Name: <span>Omokefe Ovie David</span></h2>
          <h2>Account Number: <span>3101808616</span></h2>
          <h2>Bank: <span>First Bank</span></h2>
        </div>
        </div>
        <div className="instruct">
            <h2>On Payment, please send a screenshot or copy your payment ID to <a href="https://wa.me/+2348149485675" target='_blank' rel="noreferrer">My whatsApp</a> Number</h2>
        </div>
    </div>
  )
}

export default Payment
