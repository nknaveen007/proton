import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './screens/Home/';



const App = ()=>  (
   <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      <GlobalStyle/>
   </Router>
  );


export default App;