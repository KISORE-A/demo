import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Service from './pages/Service';
import Clients from './pages/Clients';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>

    <Container>
        <BrowserRouter>

    <nav className='tvk'>
    <ul>
      <Link to='/home'>Home</Link>
      <Link to='/products'>Products</Link>
      <Link to='/service'>Service</Link>
      <Link to='/clients'>Clients</Link>
      <Link to='/portfolio'>Portfolio</Link>
      </ul>
    </nav>



      
          <Routes>
            <Route path='/home'element ={ <Home/>}/>
            <Route path='/products'element ={ <Products/>}/>
            <Route path='/service'element ={ <Service/>}/>
            <Route path='/clients'element ={ <Clients/>}/>
            <Route path='/portfolio'element ={ <Portfolio/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
    
  );
}

export default App;
