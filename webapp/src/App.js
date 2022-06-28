import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, ListGroup, CloseButton, ToggleButton, Form, Card, Navbar, Container, Nav, NavDropdown, Tabs, Tab} from 'react-bootstrap'
import NavigationBar from './Components/NavigationBar';
import Ingredients from './Components/Ingredients';
import Recipes from './Components/Recipes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Ingredients />
        <Recipes />
      </header>
    </div>
  );
}

export default App;
