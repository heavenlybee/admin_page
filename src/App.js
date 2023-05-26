import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import DataEditing from './components/DataEditing';
import FeeReminders from './components/FeeReminders';
import ScholarshipNotifications from './components/ScholarshipNotifications';
import CertificateDistribution from './components/CertificateDistribution';
import NoticeUpdates from './components/NoticeUpdates';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/data-editing" element={<DataEditing />} />
          <Route path="/fee-reminders" element={<FeeReminders />} />
          <Route path="/scholarship-notifications" element={<ScholarshipNotifications />} />
          <Route path="/certificate-distribution" element={<CertificateDistribution />} />
          <Route path="/notice-updates" element={<NoticeUpdates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
