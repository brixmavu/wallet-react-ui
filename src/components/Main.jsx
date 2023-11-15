import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>
      <div id="balanceCard">
        <h2>Balance</h2>
        <p>$100</p>
      </div>

      <div id="transactionCard">
        <h2>Last 5 Transactions</h2>
        <ul>
          <li>Transaction 1</li>
          <li>Transaction 2</li>
          <li>Transaction 3</li>
          <li>Transaction 4</li>
          <li>Transaction 5</li>
        </ul>
        <a href="transaction.html">View All Transactions</a>
      </div>
    </main>
  );
};

export default Main;