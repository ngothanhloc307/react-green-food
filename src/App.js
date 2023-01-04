import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { Home, About, Products, Cart, SingleProduct, Error } from './pages';
import './app.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
