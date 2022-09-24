import './App.css';
import Products from './components/products/products';
import ProdDetails from './components/productDetails/productDetais';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/navigation/navigation';
import Favorites from './components/favorite/favorite';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact>

      </Route>
      <Route path="/products" exact component={Products}/>
      <Route path="/products/:id" exact component={ProdDetails}/>
      <Route path="/favorites" exact component={Favorites}/>
    </Router>
  );
}

export default App;
