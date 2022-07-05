/* eslint-disable no-unused-vars */
import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";

import TopMenu from "./Components/TopMenu";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Reviews from "./Components/Reviews";
import Products from "./Components/products/Products";
import NewProduct from "./Components/products/NewProduct";
import UpdateProduct from "./Components/products/UpdateProduct";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
      <Switch>

      <Route path="/login" exact component={Login} />
       <Route path="/register" exact component={Register} />
       <Route exact path="/products/new" component={NewProduct}/>
       
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/update/:id" component={UpdateProduct}/>
        <Route exact path="/Reviews" component={Reviews}/>
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect exact path="/NotFound"/>
        
        <Route exact path="/" component={HomePage}/>



      </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
