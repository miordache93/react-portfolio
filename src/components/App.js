import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Services from './Services';
import { useState } from 'react';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          >
          </Route>
          <Route
            exact
            path="/services"
            render={props =>
              <Services
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/custom-software"
            render={props =>
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/mobileapps"
            render={props =>
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/websites"
            render={props =>
              <Websites
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/revolution"
            render={props =>
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/about"
            render={props =>
              <About
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/contact"
            render={props =>
              <Contact
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
          <Route
            exact
            path="/estimate"
            render={props =>
              <Estimate
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }>
          </Route>
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
