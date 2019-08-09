import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Routes from './routes'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Tasks from '../tasks/tasks';
import About from '../about/about';

export default props => (
    <Router>
        <div className='container'>
            <nav className='navbar navbar-inverse bg-inverse'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='/tasks'>
                            <i className='fa fa-calendar-check-o'></i> Tasks
                        </a>
                        <a className='navbar-brand' href='/about'>
                            <i className='fa fa-address-card'></i> Sobre
                        </a>
                    </div>

                    <div id='navbar' className='navbar-collapse collapse'>
                        <ul className="nav navbar-nav">
                            <li><Link to={'/tasks'} className="nav-link"> Tasks </Link></li>
                            <li><Link to={'/about'} className="nav-link"> Sobre </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path='/tasks' component={Tasks} />
                <Route path='/about' component={About} />
                <Route path='*' render={() => <Redirect from='*' to='/tasks' />} />
            </Switch>
        </div>
    </Router>
)