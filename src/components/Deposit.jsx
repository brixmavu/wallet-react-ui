import React from 'react';

function Deposit() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form method="post">
        <p>Currency: * <br />
          <select name="currency" id="currency" required>
            <option value="">--Select Currency--</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
            <option value="ZMW">ZMW</option>
          </select>
        </p>
        <p>
          <label htmlFor="amount">Amount:</label><br />
          <input type="number" name="amount" id="" required />
        </p>
        <p><button type="submit">Deposit</button></p>
      </form>
    </div>
  );
}

export default Deposit