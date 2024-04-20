import logo from './logo.svg';
import './App.css';
import ContactUs from './components/ContactUs';
import HelpCenter from './components/HelpCenter';
import OrderAndProduct from './components/OrderAndProduct';
import Delivery from './components/Delivery';
import Request from './components/Request';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Routes>
            {/* <Route path='/' element={<HelpCenter/>}/>*/}
            <Route path='/order-and-product' element={<OrderAndProduct/>}/>
            <Route path='/delivery' element={<Delivery/>}/> 

            < Route path='/' element={<ContactUs/>}/>
            <Route path='/help-center' element={<HelpCenter/>}/>
            <Route path='/request' element={<Request/>}/>


    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
