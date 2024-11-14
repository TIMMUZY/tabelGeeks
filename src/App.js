import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar, WeekList, MonthList } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/Weeklist" element={<WeekList />} />
          <Route path="/MonthList" element={<MonthList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
