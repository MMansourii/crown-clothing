import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null ;

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth) ; 
          userRef.onSnapshot(snapshot => {
              this.setState({
                currentUser:{
                  id : snapshot.id,
                  ...snapshot.data()
                }
              })
              console.log(this.state);
          });
        }else{
          this.setState({currentUser : userAuth});
        }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
              <Route exact path='/' component={Homepage} />
              <Route  path='/shop' component={ShopPage} />
              <Route  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
