import './App.css';
import NameForm from '../NameForm';
import Calculator from '../Calculator';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import React from 'react';

const Home = () => {
  return <h1>Main page</h1>
}
const ErrorPage = () => {
  return <h1>This page doesn't exist.</h1>
}
const CalcRoutes = [
  {
    id: '1',
  },
  {
    id: '2',
  }
]


const NavBar = () => {
  return (
    <menu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/nameform">NameForm</Link>
      </li>
      {CalcRoutes.map(route => {
        return <li key={route.id}>
          <NavLink to={`/calculator/${route.id}`}>
            Calculator to multiply by {route.id}
          </NavLink>
        </li>
      })}
     
    </menu>
  )
}

const CalcOpts = (props) => {
  console.log(props);
  const { id } = props.match.params;
  return <><Calculator mult={id} /></>
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  
  }
  


  render() {
    return (
      <ThemeContext.Provider value={this.state} >
      <div className="App" style={this.state.theme} >
        <Router>
        <ThemeTogglerButton />
          <NavBar />
          <Switch>  
        <Route path="/" exact component={Home} />
            <Route path="/nameform" component={NameForm} />
            <Route path="/calculator/:id" render={(props) => {
              return <ErrorBoundary><CalcOpts {...props} /></ErrorBoundary>
            }} />
          <Route path="/" component={ErrorPage} />
          </Switch>
  
        </Router>
  
      </div>
      </ThemeContext.Provider>
    );
  }

}


export default App;
