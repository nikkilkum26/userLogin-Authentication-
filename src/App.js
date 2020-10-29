import React ,{useEffect,createContext,useReducer,useContext}from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Login from './components/layout/Login';
import Profile from './components/layout/Profile';
import Signup from './components/layout/Signup';

import './App.css';
import {reducer,initialState} from './reducers/userReducer'

import Reset from './components/layout/Reset'; 
import Newpassword from './components/layout/Newpassword'; 



export const UserContext = createContext()

const Routing =()=>{
  const history = useHistory()
  const {dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER",payload:user})
      
    }else{
      if(!(history.location.pathname.startsWith('/reset')))
      history.push('/signin')
    }
  },[dispatch,history])
  return(
    <Switch>
        <Route exact path='/'>
         <Profile/>
    </Route>
       <Route path ='/signin'><Login/></Route>
       <Route exact path ='/profile'><Profile/></Route>
       <Route path ='/signup'><Signup/></Route>
       <Route exact path= '/reset'><Reset/></Route>
       <Route path= '/reset/:token'><Newpassword/></Route>
       </Switch>
  )
}

function App() {
  const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
       <Navbar/>
     <Routing/>
    </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
