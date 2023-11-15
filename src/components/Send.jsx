import React from 'react';

function Send() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form>
        <p>
          From: * <br />
          <select name="country" id="country" required>
            <option value="">--Select country--</option>
            <option value="South Africa">South Africa</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </p>
        <p>
          Currency: * <br />
          <select name="currency" id="currency" required>
            <option value="">--Select Currency--</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
            <option value="ZMW">ZMW</option>
          </select>
        </p>
        <p>
          <label htmlFor="amount">Amount:</label><br />
          <input type="number" name="amount" id="amount" required />
        </p>
        <p>
          To: * <br />
          <select name="country" id="country" required>
            <option value="">--Select country--</option>
            <option value="South Africa">South Africa</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </p>
        <p>
          Currency: * <br />
          <select name="currency" id="currency" required>
            <option value="">--Select Currency--</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
            <option value="ZMW">ZMW</option>
          </select>
        </p>
        <p>
          <label htmlFor="amount">Amount:</label><br />
          <input type="hidden" name="amount" id="amount" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Send;