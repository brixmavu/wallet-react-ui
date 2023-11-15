import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  return (
    <div className="registration-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form action="" method="post">
        <p>
          <label htmlFor="first_name">First Name:</label><br />
          <input type="text" id="first_name" name="first_name" required />
        </p>
        <p>
          <label htmlFor="last_name">Last Name:</label><br />
          <input type="text" id="last_name" name="last_name" required />
        </p>
        <p>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="phone_number">Phone Number:</label><br />
          <input type="text" id="phone_number" name="phone_number" required />
        </p>
        <p>
          <label htmlFor="street_address">Street Address:</label><br />
          <input type="text" id="street_address" name="street_address" required />
        </p>
        <p>
          <label htmlFor="postal_code">ZIP or Postal Code (optional):</label><br />
          <input className="postal_code" id="postal_code" name="postal_code" />
        </p>
        <p>
          <label htmlFor="city">City:</label><br />
          <input type="text" id="city" name="city" />
        </p>
        <p>
          <label>Country:</label><br />
          <select id="country" name="country" required>
            <option value="">--Select Country--</option>
            <option value="ZA">South Africa</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
        </p>
        <p>
          <label htmlFor="date_of_birth">Date Of Birth (MM/DD/YYYY):</label><br />
          <input type="text" id="date_of_birth" name="date_of_birth" pattern="(0[1-9]|1[0-2])/(0[1-9]|1\d|2\d|3[01])/\d{4}" required />
        </p>
        <p>
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" required />
        </p>
        <p>
          <label htmlFor="confirmPassword">Confirm Password:</label><br />
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </p>

        <p><button type="submit">Create Account</button></p>
        <p><button type="reset">Reset form</button></p>
        <p><Link to="/">Already have an account? Login Here</Link></p>
      </form>
    </div>
  );
}

export default RegistrationPage;