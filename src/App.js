import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import './App.css';

import { BrowserRouter as Router ,Switch,Route  } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import {initializeApp} from "firebase/app"
// import "firebase/auth"

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from './pages/Signup';
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './context/usercontext';
import Footer from './layout/Fotter';
import Header from './layout/Header';

import {firebaseConfig} from "./Config/firebaseConfig"
//inint firebase
initializeApp(firebaseConfig);


const App=() =>{
  const [user,setUser]=useState(null);

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="*" component={PageNotFound} />

    </Switch>
    <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
