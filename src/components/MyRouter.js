import React from 'react'
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import LoginPage from './LoginPage'
import DashContent from './DashContent'
import Tenants from "./Tenants";
import Users from "./Users";
import Roles from "./Roles";
import Authority from "./Authority";
import ErrorPage from './semantic/ErrorPage'

import requireAuth from '../utils/requireAuth'
import addingTenant from "./tenants/addingTenant";
import editingTenant from "./tenants/editingTenant";

const history = createBrowserHistory();

class MyRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact strict path="/login" component={requireAuth(LoginPage)}/>
                    <Route exact strict path="/dashboard" component={requireAuth(DashContent)}/>
                    <Route exact strict path="/tenants" component={requireAuth(Tenants)}/>
                    <Route exact strict path="/users" component={requireAuth(Users)}/>
                    <Route exact strict path="/roles" component={requireAuth(Roles)}/>
                    <Route exact strict path="/authority" component={requireAuth(Authority)}/>
                    <Route exact strict path="/tenants/add" component={requireAuth(addingTenant)}/>
                    <Route exact strict path="/tenants/edit/:id" component={requireAuth(editingTenant)}/>
                    <Redirect exact from="/" to="/login"/>
                    <Route path='/*' component={ErrorPage}/>
                </Switch>
            </Router>
        )
    }
}

export default MyRouter