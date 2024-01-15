import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import error from './components/error.jsx' ;



import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

// import CartWidget from './components/CartWidget/CartWidget';
//import ItemCount from './components/ItemCount'
// import Hero from './components/Hero/Hero.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>        
        <NavBar/>

        <Routes>

          <Route path={'/'} element={ <ItemListContainer greeting='Insumos deportivos'/> } />
          <Route path={"/categoria/:id"} element={ <ItemListContainer  />} />
          <Route path={"/item/:id"}element={ <ItemDetailContainer /> } />
          <Route path={'/cart'} element={ <CartWidget /> } />          
          <Route path={'*'} element={ <error /> }></Route>  

        </Routes>

      </BrowserRouter>    
    </div>
  );
}

export default App;
