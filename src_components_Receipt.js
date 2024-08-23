import React from 'react';
import './Receipt.css';

function Receipt(props) {
  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <p>Item: {props.item}</p>
      <p>Amount: ${props.amount}</p>
    </div>
  );
}

export default Receipt;
