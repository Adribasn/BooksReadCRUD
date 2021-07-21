import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BookList } from './BookList';
import { UpdateBook } from './UpdateBook';
import { CreateBook } from './CreateBook';



function App() {
  return (
    <div className="App">
      <nav className='navbar bg-light navbar-expand-lg navbar-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'> 
            <Link to='/' className='nav-link'>Books</Link>
          </li>
          <li className='navbar-item'> 
            <Link to='/create' className='nav-link'>Add</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={BookList} />
        <Route path='/update' component={UpdateBook} />
        <Route exact path='/create' component={CreateBook} />
      </Switch>
    </div>
  );
}

export default App;
