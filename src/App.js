import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';

class App extends Component {
    componentDidMount() {
        this.props.hideLoader();
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
