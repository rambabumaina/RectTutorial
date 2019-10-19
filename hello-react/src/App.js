import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Greet } from './components/FunctionalComponentDemo'

import Welcome from './components/ClassComponentDemo'

import Hello from './components/jsxDemo'

import Message from './components/message'

import Counter from './components/setSetDemo'

import EventHandlingDemo from './components/EventHandlingDemo'

import ParentComponent from './components/ParentComponent'

import ConditionalRendring from './components/ConditionalRendring'

import ListRendering from './components/ListRendering';

import Form from './components/Form';

import Stylesheet from './components/Stylesheet';
import LifecycleA from './components/LifecycleA';
import UserDetails from './UserComponent/UserDetails';
import PostUser from './UserComponent/PostUser';

function App() {
  return (
    <div className="App">

 
      <PostUser/>

      {/* <UserDetails /> */}

      
      {/* <LifecycleA /> */}
      {/* <Stylesheet primary ={true}/> */}

      {/* <Form /> */}

      {/* <ListRendering /> */}

      {/* <ConditionalRendring /> */}

      {/* <ParentComponent /> */}

      {/* <EventHandlingDemo /> */}

      {/* <Counter /> */}

      {/* <Message /> */}
      
      {/* <Greet name='Rambabu' lastName='meena'>
        <p>This is child pops </p>
      </Greet> */}

      {/* <Greet name='honeywell'>
        <button>Action</button>
      </Greet> */}

      {/* <Welcome Greet name='HI'/> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
