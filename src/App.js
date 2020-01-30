import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage'
import ShopPage from './pages/Shop'
import Header from './components/Header'
import SignInAndSignUp from './pages/Signin-Signup'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
  }

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log('user', user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path="/shop/" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
