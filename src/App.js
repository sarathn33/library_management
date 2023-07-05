import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Component/home';
import BookDetails from './Component/bookDetails';
import AddBook from './Component/addBooks';
import EditBook from './Component/editBook';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="/book/edit/:id">
           <EditBook/>
        </Route>
        
        <Route path="/book/add">
           <AddBook/>
        </Route>
        <Route path="/book">
           <BookDetails/>
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
