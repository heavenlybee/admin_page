import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/data-editing">Data Editing</Link></li>
        <li><Link to="/fee-reminders">Fee Reminders</Link></li>
        <li><Link to="/scholarship-notifications">Scholarship Notifications</Link></li>
        <li><Link to="/certificate-distribution">Certificate Distribution</Link></li>
        <li><Link to="/notice-updates">Notice Updates</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
