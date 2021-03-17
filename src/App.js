import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistPage from "./pages/ArtistPage";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  exact path="/artistPage" component={ArtistPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
} 

export default App;