import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BookList } from './BookList';
import { EditBook } from './EditBook';
import { AddBook } from './AddBook';



function App() {
  return (
    <div className="App">
      <nav className='navbar bg-light navbar-expand-lg navbar-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'> 
            <Link to='/' className='nav-link'>Books</Link>
          </li>
          <li className='navbar-item'> 
            <Link to='/add' className='nav-link'>Add</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={BookList} />
        <Route exact path='/edit' component={EditBook} />
        <Route exact path='/add' component={AddBook} />
      </Switch>
      
    </div>
  );
}

export default App;
