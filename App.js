import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './src/components/Home';
import EmployeeForm from './src/components/EmployeeForm';
import Navbar from './src/components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employee-form" component={EmployeeForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
