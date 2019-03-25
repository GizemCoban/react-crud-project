import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import LoginPage from './LoginPage'
import DashContent from './DashContent'
import Tenants from "./Tenants";
import Users from "./Users";
import Roles from "./Roles";
import Authority from "./Authority";

const history = createBrowserHistory();

class MyRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact strict path="/login" component={LoginPage}/>
                    <Route exact strict path="/dashboard" component={DashContent}/>
                    <Route exact strict path="/tenants" component={Tenants}/>
                    <Route exact strict path="/users" component={Users}/>
                    <Route exact strict path="/roles" component={Roles}/>
                    <Route exact strict path="/authority" component={Authority}/>
                </div>
            </Router>

        )
    }
}

export default MyRouter