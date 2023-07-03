
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Common/Header';
import Cards from './Components/Products/Cards';
import CardDetails from './Components/Products/CardDetails';
import Home from './Pages/Home';
import ViewCart from './Components/Products/ViewCart'
import WishListItem from './Components/Products/WishListItem';
import NewsLetter from './Components/Common/NewsLetter';
import ContactDetail from './Components/Common/ContactDetail';
import Footer from './Components/Common/Footer';
import Checkout from './Components/Products/Checkout';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cards/>}/>
        <Route path="/cart/:id" element={<CardDetails/>}/>
        <Route path="/viewcart" element={<ViewCart/>}/>
        <Route path="/wishlist" element={<WishListItem/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
     <NewsLetter/>
      <ContactDetail/>
      <Footer/>
    </div>
  );
}

export default App;
