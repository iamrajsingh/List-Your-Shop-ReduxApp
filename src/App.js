import React from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

//importing components

import Shop from './components/Shop';
import ShopForm from './components/ShopForm';

//Redux
import { Provider } from 'react-redux'
import store from './store';



const App = () => {


  return (
    <Provider store={store}>
      <Container fluid>
      <ShopForm/> 
       <Shop/>
        
      </Container>
    </Provider>
  );
}

export default App;
