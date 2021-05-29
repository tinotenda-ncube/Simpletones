import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './checkout/Checkout';
import Mens from './mens/Mens';
import Footer from './Footer/Footer';
import Womens from './womens/Womens';
import Login from './login/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
import { useEffect } from 'react';
import Admin from './admin/Admin';
import ProductpageDisplay from './productPage/ProductpageDisplay'


function App() {
  const [ dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      
      if (authUser){
        
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }else{
       
        dispatch({
          type: 'SET_USER',
          user:null,
        })
      }
    })

  },[])
  return (
    <Router>
    <div className="App">
    <Switch> 

    //log-in page
          <Route path='/login'>
            <Login/>
          </Route>

    // checkout page
    <Route path='/checkout'> 
      <Header/>             
      <Checkout/>
      <Footer/>
    </Route>
    <Route path='/product-page'> 
      <Header/>             
      <ProductpageDisplay/>
      <Footer/>
    </Route>



    //mens
      <Route path='/mens'>
        <Header/>  
        <Mens/>
        <Footer/>
      </Route>
    //womens
      <Route path='/womens'>
        <Header/>  
        <Womens/>
        <Footer/>
      </Route>
    //womens
      <Route path='/nicolesdash'>
        <Admin/>        
      </Route>

    <Route path='/'> 
      <Header/>
      <Home/>
      <Footer/>
      </Route> 
      </Switch>
    </div>
    </Router>
  );
}

export default App;
