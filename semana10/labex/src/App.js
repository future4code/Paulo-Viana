import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListTripsPage from './components/ListTripsPage';
import LoginPage from './components/LoginPage';
import CreateTripPage from './components/CreateTripPage';
import TripDetailsPage from './components/TripDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>

        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
