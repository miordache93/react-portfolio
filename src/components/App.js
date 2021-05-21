import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact component={() => <div>Home</div>} path="/"></Route>
          <Route exact component={() => <div>Services</div>} path="/services"></Route>
          <Route exact component={() => <div>Custom Software</div>} path="/custom-software"></Route>
          <Route exact component={() => <div>Mobile Apps</div>} path="/mobile-apps"></Route>
          <Route exact component={() => <div>Websites</div>} path="/websites"></Route>
          <Route exact component={() => <div>Revolution</div>} path="/revolution"></Route>
          <Route exact component={() => <div>About Us</div>} path="/about"></Route>
          <Route exact component={() => <div>Contact Us</div>} path="/contact"></Route>
          <Route exact component={() => <div>Estimate</div>} path="/estimate"></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
