import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/Dashboard'
import QuestDetails from './components/quests/QuestDetails'
import SignIn from './components/auth/SignIn'
import CreateQuest from './components/quests/CreateQuest'
import Landing from './components/layout/Landing';
import Credits from './components/layout/Credits';
import QuestJoin from './components/layout/QuestJoin'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/quest/:id' exact={true} component={QuestDetails} />
          <Route path='/quest/:id/join' component={QuestJoin} />
          <Route path='/signin' component={SignIn} />
          <Route path='/credits' component={Credits} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/create' component={CreateQuest} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
