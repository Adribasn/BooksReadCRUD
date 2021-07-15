import logo from './logo.svg';
import './App.css';
import { BookList } from './BookList';
import { EditBook } from './EditBook';
import { AddBook } from './AddBook';
import { Link , Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav className='navbar bg-light navbar-expand-lg navbar-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>Books</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/add' className='nav-link'>Add Book</Link>
          </li>
        </ul>
      </nav> 
      <Switch>
        <Route exact path='/' component={BookList} />
        <Route path='/login' component={Login} />
        <Route path='/edit/:id' component={EditBook} />
        <Route path='/add' component={AddBook} />
      </Switch>
    </div>
  );
}

export default App;
