import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './Home';
import Demo from './Pages/Demo';
import page404 from './Pages/page404';

class App extends Component {
    componentDidMount() {
        this.props.hideLoader();
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                <Navbar mainlogo="earth-logo.png" stickylogo="earth-logo.png"/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/demo" component={Demo}/>
                        <Route path="/*" component={page404}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
